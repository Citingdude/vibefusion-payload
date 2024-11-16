<script setup lang="ts">
import type { Button } from '~/features/button/button.model'
import type { Image } from '~/features/image/image.model'

const props = defineProps<{
  id: number
  image?: Image
  title: string
  button?: Button
  color: 'light' | 'dark'
}>()

const getBorders = computed<string>(() => {
  switch (props.id) {
    case 1:
      return 'rounded-tl-3xl rounded-br-3xl'

    case 2:
      return 'rounded-tr-3xl rounded-bl-3xl'

    case 3:
      return 'rounded-tr-3xl rounded-bl-3xl'

    case 4:
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
      v-if="props.image"
      :src="props.image.src"
      :alt="props.image.alt"
      class="aspect-square"
    >

    <!-- Title -->
    <h3 class="my-8 font-display text-3xl font-bold" :class="`${getColor}`">
      {{ props.title }}
    </h3>

    <!-- Button -->
    <AppButton
      v-if="props.button"
      :color="props.button.color"
      :to="props.button.link"
      size="md"
    >
      {{ props.button.label }}
    </AppButton>
  </div>
</template>
