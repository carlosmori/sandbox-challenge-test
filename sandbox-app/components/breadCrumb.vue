<script setup lang="ts">
  import {
    ElBreadcrumb,
    ElBreadcrumbItem,
  } from 'element-plus/dist/index.full.js'
  const props = defineProps({
    currentPath: String,
    previousPaths: [],
  })
</script>

<template>
  <div class="breadcrumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in previousPaths" :key="index">
        <NuxtLink :to="item.route"> {{ item.label }} </NuxtLink>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <span class="breadcrumbs__current">{{ props.currentPath }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
  .breadcrumbs {
    &--white {
      color: white;
    }
    position: absolute;
    top: 20px;
    left: 20px;
    // Override NuxLink a tag
    a {
      color: white;
    }
    &__current {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
</style>
