<script setup lang="ts">
  import { useSandboxStore } from '~~/store/sandbox-store'
  import Stars from './components/stars.vue'
  import { ContractEnum, RpcEnum } from './utils/types'
  const store = useSandboxStore()

  onBeforeMount(() => {
    store.initializeContract(ContractEnum.DOGGIES, RpcEnum.ETHEREUM_MAINNET)
  })
</script>

<template>
  <main class="main">
    <Stars :small-stars="150" :medium-stars="50" :big-stars="10" />
    <NuxtPage />
  </main>
</template>

<style lang="scss">
  .main {
    @include flexContainer(column, center, center);
    position: relative;
    background-color: black;
    color: white;
    min-height: 100vh;
  }
</style>
