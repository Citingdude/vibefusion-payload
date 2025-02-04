<script setup lang="ts">
import qs from 'qs'
import BlockBuilder from '~/features/block/components/BlockBuilder.vue'
import type { Collection } from '~/features/collection/models/collection.model'
import type { PageDto } from '~/features/page/page.model'

const slug = useRoute().params.slug

const query = {
  slug: {
    equals: slug,
  },
}

const queryString = qs.stringify(
  {
    where: query,
  },
  { addQueryPrefix: true },
)

const baseURL = useRuntimeConfig().public.payloadApiBaseUrl

const { data } = useFetch<Collection<PageDto>>(`/pages${queryString}`, {
  baseURL,
})

const blocks = computed(() => {
  if (!data.value)
    return null

  return data.value.docs[0]?.content
})
</script>

<template>
  <main>
    <BlockBuilder v-if="blocks" :blocks="blocks" />
  </main>
</template>
