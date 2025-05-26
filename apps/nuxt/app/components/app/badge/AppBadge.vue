<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div
    class="max-w-max rounded-br-lg rounded-tl-lg px-2 py-1
    font-body text-sm text-light-main bg-dark-100 font-medium"
  >
    {{ props.label }}
  </div>
</template>
