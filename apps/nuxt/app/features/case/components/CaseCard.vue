<script setup lang="ts">
import type { Image } from '~/features/image/types/image.type'

export interface CaseCardProps {
  category?: string
  title: string
  description: string
  image: Image | null
  slug: string
  imageOrder: 'order-1' | 'order-2'
  contentOrder: 'order-1' | 'order-2'
}
const props = defineProps<CaseCardProps>()
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
    <img
      v-if="props.image"
      class="mb-8 w-full h-auto rounded-br-3xl rounded-tl-3xl aspect-[3/4]"
      :class="props.imageOrder"
      :src="props.image.src"
      :alt="props.image.alt"
      loading="lazy"
    >

    <div
      class="flex flex-col px-8"
      :class="contentOrder"
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
