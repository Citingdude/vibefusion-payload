<script setup lang="ts">
import type { Icon } from '~/components/app/icon/icons'

import { computedAsync } from '@vueuse/core'
import { icons } from '~/components/app/icon/icons'

const props = defineProps<{
  icon: Icon
}>()

const iconComponent = computedAsync(async () => {
  const resolvedComponent = await icons[props.icon]

  return resolvedComponent.default
})
</script>

<template>
  <component :is="iconComponent" />
</template>
