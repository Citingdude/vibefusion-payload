<script setup lang="ts">
import type { Image } from '~/features/image/types/image.type'

export interface CaseCardProps {
  category?: string
  title: string
  description: string | null
  image: Image | null
  slug: string
  index: number
}

const props = defineProps<CaseCardProps>()

const imageOrderClass = computed(() => {
  return props.index % 2 === 0 ? 'order-2' : 'order-1'
})

const contentOrderClass = computed(() => {
  return props.index % 2 === 0 ? 'order-1' : 'order-2'
})
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
    <div
      v-if="props.image"
      class="bg-light-alt rounded-br-3xl rounded-tl-3xl"
      :class="[imageOrderClass]"
    >
      <img
        class="w-full h-auto object-contain rounded-br-3xl rounded-tl-3xl aspect-5/4"
        :src="props.image.src"
        :alt="props.image.alt"
        loading="lazy"
      >
    </div>

    <div
      class="flex flex-col px-8"
      :class="[contentOrderClass]"
    >
      <CasesBadge v-if="props.category">
        {{ props.category }}
      </CasesBadge>

      <h3 class="my-6 font-display text-2xl font-bold text-dark-400 lg:text-3xl">
        {{ title }}
      </h3>

      <div
        v-if="props.description"
        class="
          mb-12
          max-w-lg
          font-body
          text-base
          text-dark-300
          md:text-lg
          lg:text-xl
        "
      >
        <div v-html="props.description" />
      </div>

      <AppButton
        color="transparent"
        :to="`/cases/${props.slug}`"
        size="md"
      >
        Lees de volledige case
      </AppButton>
    </div>
  </div>
</template>
