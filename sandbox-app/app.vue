<script setup lang="ts">
  import { useSandboxStore } from '~~/store/sandbox-store'
  import Stars from './components/stars.vue'

  const store = useSandboxStore()
  onBeforeMount(() => {
    store.initializeDoggiesContract()
    // store.initializeDoggiesContractInstance();
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
    position: relative;
    background-color: black;
    color: white;
    min-height: 100vh;
    @include flexContainer(column, center, center);
  }
</style>
