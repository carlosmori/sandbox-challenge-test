<script setup lang="ts">
  import 'element-plus/dist/index.css'
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
    <!-- <Stars :small-stars="150" :medium-stars="50" :big-stars="10" /> -->
    <NuxtPage />
  </main>
</template>

<style lang="scss">
  .main {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: black;
    color: white;
  }
</style>
