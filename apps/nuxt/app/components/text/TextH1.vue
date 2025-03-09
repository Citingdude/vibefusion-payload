<script setup lang="ts">
defineProps<{
  html?: string
}>()
</script>

<template>
  <div class="font-display text-6xl lg:text-7xl" v-html="html" />
</template>
