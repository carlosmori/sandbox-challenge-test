<script setup lang="ts">
  import SearchBox from '~~/components/searchBox.vue'
</script>

<template>
  <div>
    <div class="container">
      <SearchBox />
      <div class="container__divider"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    @include flexContainer(column, center, center);
    &__divider {
      border-bottom: 1px solid rgba(0, 0, 0, 0.252);
      width: 80%;
      margin-top: 10px;
    }
  }
</style>
