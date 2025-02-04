<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const props = defineProps<ButtonProps>()

interface ButtonProps {
  color: ButtonStyle['color']
  size: ButtonStyle['size']

  to?: RouteLocationRaw
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  rel?: string
  button?: boolean
}

const buttonStyle = tv({
  base: 'w-full rounded-br-xl rounded-tl-xl text-center font-display font-bold transition hover:-translate-y-1 hover:shadow-xl sm:w-fit',
  variants: {
    size: {
      sm: 'py-2 px-4 border text-base',
      md: 'py-3 px-5 border-2 text-lg',
      lg: 'py-4 px-6 border-2 text-xl',
    },
    color: {
      purple: 'border-accent bg-accent text-light-main',
      white: 'bg-light-alt text-accent border-light-main hover:border-accent',
      transparent: 'border-accent',
      transparentWhite: 'border-accent text-light-main',
    },
  },
})

type ButtonStyle = VariantProps<typeof buttonStyle>

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
    :class="buttonStyle({
      color: props.color,
      size: props.size,
    })"
  >
    <slot />
  </component>
</template>
