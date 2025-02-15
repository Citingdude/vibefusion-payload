<script setup lang="ts">
import type { Block } from '~/features/block/types/block.type'
import BlockBuilder from '~/features/block/components/BlockBuilder.vue'
import { BlockTransformer } from '~/features/block/transformers/block.transformer'

const slug = useRoute().params.slug

if (!slug) {
  throw createError('Page not found')
}

const { data: page } = useFetch(`/api/pages/${slug}`)

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
