<script setup></script>

<template>
  <div>
    <div>
      Search Input
      <button class="app-button app-button--primary">Test</button>
    </div>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">
  .app-button {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    text-decoration: none;
    outline: none;

    // variant
    &--primary {
      background-color: $primary;
      color: #ffffff;
    }
  }
</style>
