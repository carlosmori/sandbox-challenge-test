<script setup>
  import { useSandboxStore } from '~~/store/sandbox-store'
  import {
    ElTable,
    ElTableColumn,
    ElSkeletonItem,
    ElSkeleton,
  } from 'element-plus/dist/index.full.js'
  import BreadCrumb from '~~/components/breadCrumb.vue'
  const route = useRoute()
  const store = useSandboxStore()
  const loading = ref(false)
  const imgLoading = ref(true)
  const setCurrentDoggie = async () => {
    loading.value = true
    await store.setCurrentDoggie(route.params.id)
    loading.value = false
  }
  const previousPaths = [{ route: '/', label: 'Home' }]
  const onImgLoaded = () => {
    imgLoading.value = false
  }
  onMounted(setCurrentDoggie())
</script>
<template>
  <div class="detail__container">
    <div v-if="!loading">
      <div class="detail">
        <BreadCrumb
          :current-path="route.params.id"
          :previous-paths="previousPaths"
        />

        <h3 class="detail__title">{{ store.getCurrentDoggie?.name }}</h3>
        <div class="detail__img-wrapper">
          <img
            v-show="!imgLoading"
            class="detail__img-wrapper__image"
            :src="store.getCurrentDoggie?.image_url"
            alt="doggie_image"
            width="150"
            @load="onImgLoaded"
          />
          <div
            v-if="imgLoading"
            class="detail__img-wrapper__image__placeholder"
          ></div>
        </div>
        <div class="detail__sub-block">
          <h5 class="detail__sub-block__label">Owner:</h5>
          <p class="detail__sub-block__value">
            {{ store.getCurrentDoggie?.owner }}
          </p>
        </div>
        <div class="detail__sub-block">
          <h5 class="detail__sub-block__label">Description:</h5>
          <span
            class="detail__sub-block__value detail__sub-block__value--shorter"
          >
            {{ store.getCurrentDoggie?.description }}
          </span>
        </div>
        <div class="detail__sub-block">
          <h5 class="detail__sub-block__label">Traits:</h5>
          <span class="detail__sub-block__value">
            <el-table
              :data="store.getCurrentDoggie?.attributes"
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
    <div v-else class="skeleton">
      <el-skeleton
        :count="1"
        animated
        style="
          --el-skeleton-circle-size: 150px;
          --el-skeleton-color: #444444;
          --el-skeleton-to-color: #9a9a9a;
        "
      >
        <template #template>
          <div class="skeleton__template">
            <el-skeleton-item variant="circle" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .detail__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    widows: 100%;
  }
  .detail {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    z-index: 1;
    // @include flexContainer(column, flex-start, center);
    &__img-wrapper {
      height: 160px;
      width: 160px;
      margin: 0 auto;
      border-radius: 50%;
      position: relative;
      background-image: url(/gifs/fusion.gif);
      color: transparent;
      background-position: center;
      @include floating-animation-mixin('float');
      animation: float 3s ease-in-out infinite;
      &__image {
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
      }
      &__image__placeholder {
        height: 150px;
        width: 150px;
        background-color: gray;
        margin: 0 auto;
        border-radius: 50%;
      }
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
        width: auto;
        @include mq('tablet-wide') {
          width: auto;
        }
        &--shorter {
          width: 50%;
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
    .skeleton {
      z-index: 1;
      height: 100vh;
      margin-top: 10%;
    }
  }
</style>
