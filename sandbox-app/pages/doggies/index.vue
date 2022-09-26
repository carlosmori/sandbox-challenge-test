<script setup lang="ts">
  import SearchBox from '~~/components/searchBox.vue'
</script>

<template>
  <div>
    <div class="container">
      <SearchBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    @include flexContainer(column, center, center);
    height: 100vh;
  }
</style>
