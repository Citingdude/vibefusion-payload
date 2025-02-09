<script setup lang="ts">
import BlockBuilder from '~/features/block/components/BlockBuilder.vue'
import { BlockTransformer } from '~/features/block/transformers/block.transformer'
import type { Block } from '~/features/block/types/block.type'

const { data: page } = useFetch('/api/pages/home')

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
