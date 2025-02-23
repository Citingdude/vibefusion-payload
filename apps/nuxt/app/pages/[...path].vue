<script setup lang="ts">
import type { Block } from '~/features/block/types/block.type'
import BlockBuilder from '~/features/block/components/BlockBuilder.vue'
import { BlockTransformer } from '~/features/block/transformers/block.transformer'

const path = useRoute().path

if (!path) {
  throw createError('Page not found')
}

const { data: page } = useFetch('/api/pages/page', {
  query: {
    path,
  },
})

const blocks = computed<Block[]>(() => {
  if (!page.value)
    return []

  if (!page.value.content)
    return []

  return page.value.content.map(BlockTransformer.fromDto)
})
</script>

<template>
  <main>
    <BlockBuilder :blocks="blocks" />
  </main>
</template>
