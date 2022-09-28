<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup>
  import { randomIntFromInterval } from '~~/utils/functions'

  const props = defineProps({
    smallStars: Number,
    mediumStars: Number,
    bigStars: Number,
  })
  // todo move this to utils, merging it with the other function

  const minValue = 1
  const maxValue = 100
  const precision = 100
  let smallStarsArray = Array(props.smallStars)
    .fill({})
    .map(() => {
      return {
        top: randomIntFromInterval({ minValue, maxValue, precision }),
        left: randomIntFromInterval({ minValue, maxValue, precision }),
        width: '1px',
        height: '1px',
      }
    })
  let mediumStarsArray = Array(props.mediumStars)
    .fill({})
    .map(() => {
      return {
        top: randomIntFromInterval({ minValue, maxValue, precision }),
        left: randomIntFromInterval({ minValue, maxValue, precision }),
        width: '2px',
        height: '2px',
      }
    })
  let bigStarsArray = Array(props.bigStars)
    .fill({})
    .map(() => {
      return {
        top: randomIntFromInterval({ minValue, maxValue, precision }),
        left: randomIntFromInterval({ minValue, maxValue, precision }),
        width: '4px',
        height: '4px',
      }
    })
</script>

<template>
  <div class="stars">
    <div
      v-for="(smallStar, index) in smallStarsArray"
      :key="index"
      class="stars stars__element"
      :style="{
        top: `${smallStar.top}%`,
        left: `${smallStar.left}%`,
        width: smallStar.width,
        height: smallStar.height,
      }"
    ></div>
    <div
      v-for="(smallStar, index) in mediumStarsArray"
      :key="index"
      class="stars stars__element"
      :style="{
        top: `${smallStar.top}%`,
        left: `${smallStar.left}%`,
        width: smallStar.width,
        height: smallStar.height,
      }"
    ></div>
    <div
      v-for="(smallStar, index) in bigStarsArray"
      :key="index"
      class="stars stars__element"
      :style="{
        top: `${smallStar.top}%`,
        left: `${smallStar.left}%`,
        width: smallStar.width,
        height: smallStar.height,
      }"
    ></div>
  </div>
</template>

<style lang="scss">
  .stars {
    @include floating-animation-mixin('float');
    animation: float 3s ease-in-out infinite;
    position: absolute;
    height: 95%;
    width: 95%;
    z-index: 0;
    &__element {
      background-color: white;
      border-radius: 50%;
      filter: brightness(95%);
      position: absolute;
    }
  }
</style>
