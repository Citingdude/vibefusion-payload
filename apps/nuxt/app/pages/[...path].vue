<script setup lang="ts">
import type { BlockDto } from '~/features/block/types/block.type'
import BlockRenderer from '~/features/block/components/BlockRenderer.vue'

const path = useRoute().path

if (!path) {
  throw createError('Page not found')
}

const { data: page } = useFetch('/api/payload/page', {
  query: {
    path,
  },
})

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
    <BlockRenderer :blocks="blocks" />
  </main>
</template>
