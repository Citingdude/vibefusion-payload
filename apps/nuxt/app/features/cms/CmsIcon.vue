<script setup lang="ts">
import type { Icon } from '@repo/payload'

const props = defineProps<{
  icon: Icon | number
}>()

const iconUrl = computed<string | undefined>(() => {
  if (typeof props.icon === 'number') {
    return undefined
  }

  return props.icon.url || undefined
})

const iconName = computed<string | undefined>(() => {
  if (typeof props.icon === 'number') {
    return undefined
  }

  return props.icon.name
})
</script>

<template>
  <img
    :src="iconUrl"
    :alt="iconName"
  >
</template>
