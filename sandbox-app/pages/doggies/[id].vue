<script setup>
import { useSandboxStore } from '~~/store/sandbox-store';

  const route = useRoute()
  const store = useSandboxStore()
  const currentDoggie = reactive(store.doggies.currentDoggie);
  if (!route.params.id) {
    console.log('Warning! Make sure user is authenticated!')
  }
  const setCurrentDoggie = async() => {
    await store.setCurrentDoggie(route.params.id);
  }  
  onMounted(setCurrentDoggie())
  </script>
<template>
    <div>
      Doggie Child -  {{ $route.params.id }}
      {{this.store.doggies.currentDoggie.name}}
    </div>
</template>
