<script setup lang="ts">
import type { BlockDto } from '~/features/block/types/block.type'

import BlockRenderer from '~/features/block/components/BlockRenderer.vue'

const { data: page } = await useFetch('/api/orpc/home', {
  key: 'home',
})

const data = useLivePreview({
  initialData: page,
})

const blocks = computed<BlockDto[]>(() => {
  if (!data?.data.value)
    return []

  if (!data.data.value.content) {
    return []
  }

  return data.data.value.content.map(block => jsonParse(block))
})
</script>

<template>
  <main>
    <BlockRenderer :blocks="blocks" />
  </main>
</template>
