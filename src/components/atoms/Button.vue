<script lang="ts" setup>

defineProps({
   title: {
      type: String,
      required: true
   }
})
</script>


<template>
   <button class="text-white">
      {{ title }}
   </button>
</template>