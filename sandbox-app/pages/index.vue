<script setup lang="ts">
  import SearchBox from '~~/components/searchBox.vue'
  import { useSandboxStore } from '~~/store/sandbox-store'

  const store = useSandboxStore()

  const previousPaths = [{ route: '/', label: 'Home' }]
  onMounted(async () => {
    await store.resetCurrentDoggie()
  })
</script>

<template>
  <div>
    <div class="container">
      <BreadCrumb current-path="" :previous-paths="previousPaths" />
      <img
        src="/the-sandbox-logo.svg"
        alt="sandbox-logo"
        width="350"
        class="container__image"
      />
      <h1 class="container__title">The Doggies Explorer</h1>
      <SearchBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    @include flexContainer(column, center, center);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    z-index: 10;
    &__image {
      @include floating-animation-mixin('float');
      animation: float 3s ease-in-out infinite;
      -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
      filter: invert(100%);
    }
    &__title {
      font-size: 1rem;
      margin: 10px 0px;
      color: transparent;
      background-image: url(/gifs/blue.gif);
      background-clip: text;
      -webkit-background-clip: text;
      background-position: center;
      filter: invert(1);
    }
  }
</style>
