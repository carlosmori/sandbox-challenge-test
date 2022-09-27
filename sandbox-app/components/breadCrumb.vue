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
        <span>{{ props.currentPath }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
  .breadcrumbs {
    position: absolute;
    top: 20px;
    left: 20px;
    a,
    span {
      color: white;
    }
  }
</style>
