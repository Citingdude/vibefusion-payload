<script setup lang="ts">
const props = defineProps<{
  src: string | undefined
  alt: string
}>()

const { cmsBaseUrl } = useRuntimeConfig().public

const imageSrc = computed<string>(() => {
  return `${cmsBaseUrl}/${props.src}`
})
</script>

<template>
  <img
    :src="imageSrc"
    :alt="props.alt"
  >
</template>
