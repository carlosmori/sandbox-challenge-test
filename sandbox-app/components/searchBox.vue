<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
  import { ElButton, ElInput, ElForm } from 'element-plus/dist/index.full.js'
  import { randomIntFromInterval } from '../utils/functions'
  const labelPosition = ref('top')

  const formLabelAlign = reactive({
    tokenId: 'top',
  })
  const tokenId = ref('')
  const router = useRouter()

  const redirect = ({ random = false }) => {
    let path = ''
    if (random) {
      const randomId = randomIntFromInterval(1, 10000)
      path = `/doggies/${randomId}`
    } else {
      path = `/doggies/${tokenId.value}`
    }
    router.push({ path })
  }
</script>
<template>
  <div class="search-box">
    <div class="search-box__header">
      <div class="search-box__header__img">
        <img
          class="gradient-border"
          src="https://contracts.sandbox.game/snoopdogg/1.jpg"
          alt=""
          width="150"
        />
      </div>

      <h2 class="search-box__header__title search-box__header__title--base">
        The Doggies Explorer
      </h2>
    </div>
    <div class="search-box__form">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <label
          for="search"
          class="search-box__form__label search-box__form__label--small"
          >Doggie Id</label
        >
        <el-input
          v-model="tokenId"
          class="search-box__form__input"
          placeholder="Type Doggie Id"
          :prefix-icon="Search"
          type="number"
        />
        <el-button
          class="search-box__form__button search-box__form__button--color"
          type="primary"
          bg
          @click="redirect({})"
        >
          Search
        </el-button>
        <br />
        <el-button
          class="search-box__form__button search-box__form__button--color"
          type="warning"
          @click="redirect({ random: true })"
        >
          Random Doggie
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search-box {
    width: 80%;
    margin-top: 5%;

    &__header {
      margin: 0 1rem;
      @include flexContainer(column, center, center);
      &__title {
        text-align: center;
        &--base {
          font-size: 0.75rem;
          margin: 10px 0px;
        }
      }
      &__img {
        img {
          border-radius: 50%;
          //   box-shadow: 0px 0px 50px #8f8f8f8f;
        }
      }
    }
    &__form {
      margin: 0 1rem;
      border: 1px solid white;
      @include flexContainer(column, center, center);
      &__label {
        width: 100%;
        padding: 5px;
        margin: 10px 0px;
        &--small {
          font-size: 0.5rem;
        }
      }
      &__input {
        width: 100%;
        margin: 5px 0px;
      }
      &__button {
        width: 100%;
        padding: 5px;
        margin: 10px 0px;
        &--color {
        }
      }
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
</style>
