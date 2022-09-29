<script setup>
  import { useSandboxStore } from '~~/store/sandbox-store'
  import {
    ElTable,
    ElTableColumn,
    ElSkeletonItem,
    ElSkeleton,
  } from 'element-plus/dist/index.full.js'
  import BreadCrumb from '~~/components/breadCrumb.vue'
  import { DOGGIES_ABI } from '~~/utils/abis'
  import { DOGGIES_SMART_CONTRACT_ADDRESS } from '~~/utils/constants'
  import Web3 from 'web3'
  import axios from 'axios'

  const route = useRoute()
  const loading = ref(false)

  const previousPaths = [{ route: '/', label: 'Home' }]
  const onImgLoaded = () => {
    imgLoading.value = false
  }
  const { data: doggie } = await useAsyncData(
    route.params.id,
    async ({ params, error, payload }) => {
      console.log('enter')
      loading.value = true
      const w3 = new Web3('https://rpc.ankr.com/eth')
      const contract = new w3.eth.Contract(
        DOGGIES_ABI,
        DOGGIES_SMART_CONTRACT_ADDRESS
      )
      const doggieId = route.params.id
      const url = await contract.methods.tokenURI(doggieId).call()
      const owner = await contract.methods.ownerOf(doggieId).call()
      const data = await axios.get(url)
      let doggie = data.data
      doggie = {
        ...doggie,
        attributes: doggie.attributes.map((trait) =>
          trait.value === '' ? { ...trait, value: 'Not specified' } : trait
        ),
        owner,
      }
      loading.value = false
      return doggie
    }
  )
</script>
<template>
  <div class="detail">
    <div class="detail__container">
      <BreadCrumb
        :current-path="route.params.id"
        :previous-paths="previousPaths"
      />

      <h3 class="detail__container__title">
        {{ doggie.name }}
      </h3>
      <div class="detail__container__img-wrapper">
        <img
          v-show="!imgLoading"
          class="detail__container__img-wrapper__image"
          :src="doggie.image_url"
          alt="doggie_image"
          width="150"
          @load="onImgLoaded"
        />
        <div
          v-if="imgLoading"
          class="detail__container__img-wrapper__image__placeholder"
        ></div>
      </div>
      <div class="detail__container__sub-block">
        <h5 class="detail__container__sub-block__label">Owner:</h5>
        <p class="detail__container__sub-block__value">
          {{ doggie.owner }}
        </p>
      </div>
      <div class="detail__container__sub-block">
        <h5 class="detail__container__sub-block__label">Description:</h5>
        <span
          class="detail__container__sub-block__value detail__container__sub-block__value--shorter"
        >
          {{ doggie.description }}
        </span>
      </div>
      <div class="detail__container__sub-block">
        <h5 class="detail__container__sub-block__label">Traits:</h5>
        <span class="detail__container__sub-block__value">
          <el-table
            :data="doggie.attributes"
            stripe
            class="detail__container__sub-block__value__table"
          >
            <el-table-column prop="trait_type" label="Type" width="160" />
            <el-table-column prop="value" label="Name" width="160" />
          </el-table>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    widows: 100%;
    &__container {
      @include flexContainer(column, flex-start, center);
      width: 100%;
      text-align: center;
      z-index: 1;
      &__img-wrapper {
        @include floating-animation-mixin('float');
        animation: float 3s ease-in-out infinite;
        height: 160px;
        width: 160px;
        margin: 0 auto;
        border-radius: 50%;
        position: relative;
        background-image: url(/gifs/fusion.gif);
        color: transparent;
        background-position: center;
        &__image,
        &__image__placeholder {
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
        @include flexContainer(column, center, center);
        margin: 10px 0px;
        max-width: 100%;
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
            width: 100%;
            height: 200px;
            @include mq('tablet-wide') {
              font-size: 0.5rem;
            }
          }
        }
      }
      .skeleton {
        z-index: 1;
        height: 100vh;
        margin-top: 10%;
      }
    }
  }
</style>
