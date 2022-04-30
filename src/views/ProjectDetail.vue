<template>
  <div>
    <h1>{{ title }}</h1>
    <component :is="projectComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  projectComponent: Object,
})

const data = ref()

</script>

<style scoped>

</style>
