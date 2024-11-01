<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

const props = defineProps<{
  title: string
  icon: 'webdesign' | 'webshop' | 'branding'
  to: RouteLocationRaw
}>()

const iconComponent = computed(() => {
  switch (props.icon) {
    case 'webdesign':
      return resolveComponent('IconsWebdesign')

    case 'webshop':
      return resolveComponent('IconsWebshop')

    case 'branding':
      return resolveComponent('IconsBranding')

    default:
      return resolveComponent('IconsWebdesign')
  }
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-center space-x-4 rounded-xl p-4 hover:bg-light-main"
  >
    <component :is="iconComponent" class="h-12 w-12" />
    <p>
      {{ title }}
    </p>
  </NuxtLink>
</template>
