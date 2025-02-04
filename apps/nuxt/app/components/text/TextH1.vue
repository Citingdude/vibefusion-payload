<script setup lang="ts">
defineProps<{
  html?: string
}>()
</script>

<template>
  <div class="mb-16 font-display text-6xl lg:mb-24 lg:text-7xl" v-html="html" />
</template>
