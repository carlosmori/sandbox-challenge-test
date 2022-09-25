<script setup lang="ts">
  import { useSandboxStore } from '~~/store/sandbox-store'
  const store = useSandboxStore()
  onBeforeMount(() => {
    store.initializeDoggiesContract()
    // store.initializeDoggiesContractInstance();
  })
</script>
<template>
  <main class="main">
    <NuxtPage />
  </main>
</template>

<style lang="scss">
  .main {
    background-color: black;
    height: 100vh;
    width: 100vw;
  }
</style>
