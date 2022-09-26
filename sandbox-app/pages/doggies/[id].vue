<script setup>
  import { useSandboxStore } from '~~/store/sandbox-store'

  const route = useRoute()
  const store = useSandboxStore()
  if (!route.params.id) {
  }
  const setCurrentDoggie = async () => {
    await store.setCurrentDoggie(route.params.id)
  }
  onMounted(setCurrentDoggie())
</script>
<template>
  <div>
    Doggie Child - {{ route.params.id }}
    {{ store.doggies.currentDoggie.name }}
  </div>
</template>
