<script setup lang="ts">
import type { LinkField } from '@repo/payload'
import type { Icon } from '~/features/icon/types/icon.type'
import CmsLink from '~/features/cms/CmsLink.vue'

export interface ServiceCardProps {
  index: number
  icon: Icon | null
  title: string | null
  link?: LinkField
  color: 'light' | 'dark'
}

const props = defineProps<ServiceCardProps>()

const getBorders = computed<string>(() => {
  switch (props.index) {
    case 0:
      return 'rounded-tl-3xl rounded-br-3xl'

    case 1:
      return 'rounded-tr-3xl rounded-bl-3xl'

    case 2:
      return 'rounded-tr-3xl rounded-bl-3xl'

    case 3:
      return 'rounded-tl-3xl rounded-br-3xl'

    default:
      return ''
  }
})

const getColor = computed<string>(() => {
  switch (props.color) {
    case 'light':
      return 'bg-light-main'

    case 'dark':
      return 'bg-dark-200 text-light-main'

    default:
      return ''
  }
})
</script>

<template>
  <div
    class="bg-dark anim-fade-in-up col-span-2 flex flex-col items-center justify-center p-12 md:col-span-1"
    :class="[getBorders, getColor]"
  >
    <!-- Icon -->
    <img
      v-if="props.icon?.src"
      :src="props.icon.src"
      :alt="props.icon.name"
      class="aspect-square"
    >

    <!-- Title -->
    <h3 class="my-8 font-display text-3xl font-bold" :class="`${getColor}`">
      {{ props.title }}
    </h3>

    <!-- Button -->
    <CmsLink
      v-if="props.link"
      :link-field="props.link"
    />
  </div>
</template>
