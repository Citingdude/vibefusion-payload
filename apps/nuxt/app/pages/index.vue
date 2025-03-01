<script setup lang="ts">
import type { Block } from '~/features/block/types/block.type'
import BlockBuilder from '~/features/block/components/BlockBuilder.vue'

import { BlockTransformer } from '~/features/block/transformers/block.transformer'

const { data: page } = await useFetch('/api/payload/test')

const { data } = useLivePreview({
  initialData: page,
})

const blocks = computed<Block[]>(() => {
  if (!data.value)
    return []

  if (!data.value.content)
    return []

  return data.value.content.map(BlockTransformer.fromDto)
})
</script>

<template>
  <main>
    <BlockBuilder :blocks="blocks" />
  </main>
</template>
