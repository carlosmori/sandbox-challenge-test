<script setup>
  import { useSandboxStore } from '~~/store/sandbox-store'
  import { ElTable, ElTableColumn } from 'element-plus/dist/index.full.js'
  import BreadCrumb from '~~/components/breadCrumb.vue'

  const route = useRoute()
  const store = useSandboxStore()
  if (!route.params.id) {
  }
  const setCurrentDoggie = async () => {
    await store.setCurrentDoggie(route.params.id)
  }
  const previousPaths = [
    { route: '/', label: 'Home' },
    { route: '/doggies', label: 'Doggies' },
  ]
  onMounted(setCurrentDoggie())
</script>
<template>
  <div>
    <div class="detail">
      <BreadCrumb
        :current-path="route.params.id"
        :previous-paths="previousPaths"
      />
      <h3 class="detail__title">{{ store.doggies.currentDoggie.name }}</h3>
      <img
        class="detail__img"
        :src="store.doggies.currentDoggie.image_url"
        alt="doggie_image"
        width="150"
      />
      <div class="detail__sub-block">
        <h5 class="detail__sub-block__label">Owner:</h5>
        <p class="detail__sub-block__value">
          {{ store.doggies.currentDoggie.owner }}
        </p>
      </div>
      <div class="detail__sub-block">
        <h5 class="detail__sub-block__label">Description:</h5>
        <span
          class="detail__sub-block__value detail__sub-block__value--shorter"
        >
          {{ store.doggies.currentDoggie.description }}
        </span>
      </div>
      <div class="detail__sub-block">
        <h5 class="detail__sub-block__label">Traits:</h5>
        <span class="detail__sub-block__value">
          <el-table
            :data="store.doggies.currentDoggie.attributes"
            stripe
            class="detail__sub-block__value__table"
          >
            <el-table-column prop="trait_type" label="Type" width="180" />
            <el-table-column prop="value" label="Name" width="180" />
          </el-table>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .detail {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    z-index: 1;
    // @include flexContainer(column, flex-start, center);
    &__img {
      border-radius: 50%;
      @include floating-animation-mixin('float');
      animation: float 3s ease-in-out infinite;
    }
    &__title {
      font-size: 1rem;
      margin: 20px 0px;
      background-image: 'url(/gifs/fusion.gif)';
      background-clip: 'text';
      -webkit-background-clip: 'text';
      color: 'transparent';
      background-position: 'center';
    }
    &__sub-block {
      margin: 10px 0px;
      max-width: 100%;
      @include flexContainer(column, center, center);
      &__label {
        font-size: 0.5rem;
        margin: 5px 0;
      }
      &__value {
        display: inline-block;
        font-size: 0.4rem;
        width: 70%;
        &--shorter {
          @include mq('tablet-wide') {
            width: 50%;
          }
        }
        margin: 0;
        text-overflow: ellipsis;
        max-width: 100%;
        &__table {
          font-size: 0.4rem;
          @include mq('tablet-wide') {
            font-size: 0.5rem;
          }
          width: 100%;
          height: 200px;
        }
      }
    }
  }
</style>
