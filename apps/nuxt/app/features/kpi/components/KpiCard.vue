<script setup lang="ts">
import type { Icon } from '@repo/payload'
import CmsIcon from '~/features/cms/CmsIcon.vue'

const props = defineProps<{
  icon?: Icon | number | null | undefined
  title: string
  body: string
}>()
</script>

<template>
  <div class="p-6 xl:p-12 bg-light-main rounded-br-3xl rounded-tl-3xl">
    <CmsIcon
      v-if="props.icon"
      :icon="props.icon"
      class="size-12 aspect-square object-scale-down"
    />

    <h3 class="mb-4 font-display text-2xl font-bold mt-6">
      {{ props.title }}
    </h3>

    <div v-html="props.body" />
  </div>
</template>
