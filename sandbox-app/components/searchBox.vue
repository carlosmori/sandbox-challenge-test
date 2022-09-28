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
  const errors = ref([])

  const redirect = ({ random = false }) => {
    if (random) {
      const randomId = randomIntFromInterval(1, 10000)
      router.push({ path: `/${randomId}` })
    } else {
      errors.value = []
      if (!tokenId.value) {
        errors.value.push('Type a Doggie Id')
      } else if (+tokenId.value > 10000 || +tokenId.value === 0) {
        errors.value.push('Id must be between 1-10.000')
      } else {
        router.push({ path: `/${tokenId.value}` })
      }
    }
  }
</script>
<template>
  <div class="search-box">
    <div class="search-box__header"></div>
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
        <div
          :class="{ invisible: !errors.length }"
          class="search-box__form__input__errors"
        >
          <ul class="search-box__form__input__values">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>

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
  .invisible {
    visibility: hidden;
  }
  .search-box {
    z-index: 1;
    width: 80%;
    margin-top: 5%;

    &__header {
      margin: 0 1rem;
      @include flexContainer(column, center, center);
    }
    &__form {
      margin: 0 1rem;
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
        padding-bottom: 40px;
        &__errors {
          font-size: 0.4rem;
          color: red;
          position: relative;
          ul {
            padding-left: 0px;
            list-style: none;
          }
        }
        &__values {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      &__button {
        width: 100%;
        padding: 5px;
        margin: 10px 0px;
      }
    }
  }
</style>
