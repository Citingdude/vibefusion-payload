<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export interface ButtonProps {
  color?: ButtonStyle['color']
  size?: ButtonStyle['size']
  to?: RouteLocationRaw
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  rel?: string
  button?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'md',
  color: 'purple',
})

const buttonStyle = tv({
  base: `flex w-full rounded-br-xl rounded-tl-xl text-center font-display 
  font-bold sm:w-fit
  transition-all ease-in-out duration-300
  focus-visible:outline-dashed outline-accent outline-offset-4 
  focus-visible:outline-2 
  hover:rounded-br-none hover:rounded-bl-xl 
  hover:rounded-tl-none hover:rounded-tr-xl
  active:scale-95`,
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
