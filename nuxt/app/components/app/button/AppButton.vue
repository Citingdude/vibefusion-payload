<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { Color, Size } from '~~/types/components/button.type'

const props = defineProps<{
  color: Color
  size: Size

  to?: RouteLocationRaw
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  rel?: string
  button?: boolean
}>()

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'py-2 px-4 border text-base'
    case 'medium':
      return 'py-3 px-5 border-2 text-lg'
    case 'large':
      return 'py-4 px-6 border-2 text-xl'
  }
})

const colorClasses = computed(() => {
  switch (props.color) {
    case 'purple':
      return 'border-accent bg-accent text-light-main'
    case 'white':
      return 'bg-light-alt text-accent border-light-main hover:border-accent'
    case 'transparent':
      return 'border-accent'
    case 'transparent-white':
      return 'border-accent text-light-main'
  }
})

const buttonComponent = computed(() => {
  return props.button ? 'button' : resolveComponent('NuxtLink')
})
</script>

<template>
  <component
    :is="buttonComponent"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    class="w-full rounded-br-xl rounded-tl-xl text-center font-display font-bold transition hover:-translate-y-1 hover:shadow-xl sm:w-fit"
    :class="[
      colorClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </component>
</template>
