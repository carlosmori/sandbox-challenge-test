<script setup lang="ts">
  const tokenId = ref('')
</script>
<template>
  <div class="search-box">
    <div class="search-box__header">
      <div class="search-box__header__img gradient-border">
        <img
          class="gradient-border"
          src="https://contracts.sandbox.game/snoopdogg/1.jpg"
          alt=""
          width="150"
        />
      </div>

      <h2 class="search-box__header__title search-box__header__title--base">
        The Doggies Explorer
      </h2>
    </div>
    <div class="search-box__form">
      <label
        for="search"
        class="search-box__form__label search-box__form__label--small"
        >Token Id</label
      >
      <input v-model="tokenId" class="search-box__form__input" type="text" />
      {{ tokenId }}
      <button class="search-box__form__button search-box__form__button--color">
        Search
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search-box {
    color: $primary;
    border: 1px solid white;
    width: 80%;
    margin-top: 10%;

    &__header {
      margin: 0 1rem;
      @include flexContainer(column, center, center);
      &__title {
        text-align: center;
        &--base {
          font-size: 0.75rem;
        }
      }
      &__img {
        img {
          border-radius: 50%;
          //   box-shadow: 0px 0px 50px #8f8f8f8f;
        }
      }
    }
    &__form {
      margin: 0 1rem;
      border: 1px solid white;
      @include flexContainer(column, center, center);
      &__label {
        width: 100%;
        padding: 5px;
        margin: 10px 0px;
        &--small {
          font-size: 0.5rem;
        }
      }
      &__input {
        width: 100%;
        margin: 10px 0px;
      }
      &__button {
        width: 100%;
        padding: 5px;
        margin: 10px 0px;
        &--color {
          color: white;
          background-color: $secondary;
        }
      }
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
</style>
