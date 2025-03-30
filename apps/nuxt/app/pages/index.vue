<script setup lang="ts">
import type { BlockDto } from '~/features/block/types/block.type'

import BlockRenderer from '~/features/block/components/BlockRenderer.vue'

const { data: page } = await useFetch('/api/payload/page/home')
const { data: pages } = await useFetch('/api/orpc/pages')

const { data } = useLivePreview({
  initialData: page,
})

const blocks = computed<BlockDto[]>(() => {
  if (!data.value)
    return []

  if (!data.value.content)
    return []

  return data.value.content.map(block => jsonParse(block))
})
</script>

<template>
  <main>
    <pre>{{ pages }}</pre>
    <BlockRenderer :blocks="blocks" />
  </main>
</template>
