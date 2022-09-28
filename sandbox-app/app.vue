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
    <NuxtPage />
  </main>
</template>

<style lang="scss">
  .main {
    position: relative;
    background-color: black;
    color: white;
    min-height: 100vh;
    @include flexContainer(column, center, center);
  }
</style>
