<script setup lang="ts">
import type { Button } from '~/features/button/types/button.type'

interface Props {
  type: 'feature' | 'cta'
  icon?: string
  color: 'light' | 'dark' | 'transparent'
  title: string
  body?: string
  borders: 'tl-br' | 'tr-bl'
  button?: Button
}
const props = defineProps<Props>()

const getColor = computed(() => {
  switch (props.color) {
    case 'light':
      return 'bg-light-main'
    case 'dark':
      return 'bg-dark-300 text-light-main'
    case 'transparent':
      return ''
    default:
      return ''
  }
})

const getBorders = computed(() => {
  switch (props.borders) {
    case 'tl-br':
      return 'rounded-br-3xl rounded-tl-3xl'

    case 'tr-bl':
      return 'rounded-bl-3xl rounded-tr-3xl'

    default:
      return 'rounded-bl-3xl rounded-tr-3xl'
  }
})
</script>

<template>
  <!-- Normal feature card -->
  <div
    v-if="props.type === 'feature'"
    class="p-12"
    :class="[getColor, getBorders]"
  >
    <IconsRocket v-if="icon" class="mb-6" />

    <h3 class="mb-4 font-display text-2xl font-bold">
      {{ props.title }}
    </h3>

    <div v-html="props.body" />
  </div>

  <!-- CTA Card -->
  <div
    v-if="props.type === 'cta'"
    class="flex flex-col justify-center p-12 text-center"
    :class="[getColor, getBorders]"
  >
    <h3 class="mb-4 font-display text-2xl font-bold">
      {{ props.title }}
    </h3>

    <div class="flex justify-center">
      <AppButton
        v-if="props.button"
        size="md"
        :color="props.button.color"
        :to="props.button.link"
      >
        {{ props.button.label }}
      </AppButton>
    </div>
  </div>
</template>
