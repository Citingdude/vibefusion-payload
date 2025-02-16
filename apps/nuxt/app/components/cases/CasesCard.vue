<script setup lang="ts">
import type { Image } from '~/features/image/types/image.type'

interface Props {
  badgeText?: string
  title: string
  summary: string | null
  image: Image | null
  link: string
  imageOrder: 'order-1' | 'order-2'
  contentOrder: 'order-1' | 'order-2'
}
const props = defineProps<Props>()
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
    <img
      v-if="props.image"
      class="mb-8 w-full rounded-br-3xl rounded-tl-3xl"
      :class="props.imageOrder"
      :src="props.image.src"
      :alt="props.image.alt"
      loading="lazy"
    >

    <div class="flex flex-col px-8" :class="contentOrder">
      <CasesBadge v-if="badgeText">
        {{ badgeText }}
      </CasesBadge>

      <h3 class="my-6 font-display text-2xl font-bold text-dark-400 lg:text-3xl">
        {{ title }}
      </h3>

      <div
        v-if="summary" class="
          mb-12
          max-w-lg
          font-body
          text-base
          text-dark-300
          md:text-lg
          lg:text-xl
        "
      >
        <div v-html="summary" />
      </div>

      <AppButton type="internal" color="transparent" :to="link" size="md">
        Lees de volledige case
      </AppButton>
    </div>
  </div>
</template>
