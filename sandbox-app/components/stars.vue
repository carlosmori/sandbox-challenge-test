<script lang="ts" setup>
  const props = defineProps({
    smallStars: Number,
    mediumStars: Number,
    bigStars: Number,
  })
  const randomIntFromInterval = () => {
    const precision = 100 // 2 decimals
    const randomnum =
      Math.floor(
        Math.random() * (100 * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision)

    // min and max included
    return randomnum
  }
  console.log(`props equals:`)
  console.log(props)
  let smallStarsArray = Array(props.smallStars)
    .fill({})
    .map(() => {
      return {
        top: randomIntFromInterval(),
        left: randomIntFromInterval(),
        width: '1px',
        height: '1px',
      }
    })
  let mediumStarsArray = Array(props.mediumStars)
    .fill({})
    .map(() => {
      return {
        top: randomIntFromInterval(),
        left: randomIntFromInterval(),
        width: '2px',
        height: '2px',
      }
    })
  let bigStarsArray = Array(props.bigStars)
    .fill({})
    .map(() => {
      return {
        top: randomIntFromInterval(),
        left: randomIntFromInterval(),
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
      :style="{
        backgroundColor: 'white',
        borderRadius: '50%',
        filter: 'brightness(95%)',
        position: 'absolute',
        top: `${smallStar.top}%`,
        left: `${smallStar.left}%`,
        width: smallStar.width,
        height: smallStar.height,
      }"
    ></div>
    <div
      v-for="(smallStar, index) in mediumStarsArray"
      :key="index"
      :style="{
        backgroundColor: 'white',
        borderRadius: '50%',
        filter: 'brightness(95%)',
        position: 'absolute',
        top: `${smallStar.top}%`,
        left: `${smallStar.left}%`,
        width: smallStar.width,
        height: smallStar.height,
        boxShadow: '0px 0px 20px 2px white',
      }"
    ></div>
    <div
      v-for="(smallStar, index) in bigStarsArray"
      :key="index"
      :style="{
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0px 0px 20px 2px white',
        filter: 'brightness(95%)',
        position: 'absolute',
        top: `${smallStar.top}%`,
        left: `${smallStar.left}%`,
        width: smallStar.width,
        height: smallStar.height,
      }"
    ></div>
  </div>
</template>

<style>
  .stars {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>
