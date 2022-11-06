<script setup lang="ts">
import { onMounted } from 'vue'
import Hero from '@/components/organisms/Hero.vue';

onMounted(() => {
  console.log('Home mounted')
})
</script>


<template>
  <Hero />
</template>


<style scoped>

</style>