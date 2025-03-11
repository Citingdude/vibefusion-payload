<script setup lang="ts">
import type { Media } from '@repo/payload'

const props = defineProps<{
  image: Media | number
}>()

const payloadImage = computed<Media | null>(() => {
  if (typeof props.image === 'number') {
    return null
  }

  return props.image
})
</script>

<template>
  <img
    :src="payloadImage?.url || undefined"
    :alt="payloadImage?.alt"
    class="aspect-140/53 w-full h-auto"
  >
</template>
