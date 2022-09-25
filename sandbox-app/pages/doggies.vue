<script setup lang="ts">
  import SearchBox from '~~/components/searchBox.vue'
</script>

<template>
  <div>
    <div class="container">
      <SearchBox />
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    @include flexContainer(row, center, center);
  }
</style>
