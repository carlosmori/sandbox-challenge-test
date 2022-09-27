<script setup lang="ts">
  import SearchBox from '~~/components/searchBox.vue'
  import Stars from '~~/components/stars.vue'

  const previousPaths = [{ route: '/', label: 'Home' }]
</script>

<template>
  <div>
    <!-- <Stars :small-stars="150" :medium-stars="50" :big-stars="10" /> -->
    <div class="container">
      <BreadCrumb current-path="Doggies" :previous-paths="previousPaths" />
      <img src="/the-sandbox-logo.svg" alt="sandbox-logo" width="350" />
      <h2 class="container__title">The Doggies Explorer</h2>
      <SearchBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    @include flexContainer(column, center, center);
    z-index: 10;
    img {
      @include floating-animation-mixin('float');
      animation: float 3s ease-in-out infinite;
      position: absolute;
      top: 20%;
      -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
      filter: invert(100%);
    }
    &__title {
      font-size: 1rem;
      margin: 10px 0px;
      color: transparent;
      color: white;
      // background-image: url(/gifs/fusion.gif);
      background-clip: text;
      -webkit-background-clip: text;
      background-position: center;
    }
  }
</style>
