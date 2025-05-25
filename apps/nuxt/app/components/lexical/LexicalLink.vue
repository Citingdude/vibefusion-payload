<script setup lang="ts">
import type { LexicalLinkNode } from '~/features/lexical/models/lexicalLinkNode.model'

const props = defineProps<{
  node: LexicalLinkNode
}>()

function getInternalLinkPath(relation: string, slug: string): string | undefined {
  if (slug === 'home') {
    return '/'
  }

  switch (relation) {
    case 'cases':
      return `/cases/${slug}`

    case 'pages':
      return `/${slug}`

    default:
      return undefined
  }
}
</script>

<template>
  <template v-for="(child, index) in props.node.children" :key="index">
    <a
      v-if="props.node.fields.linkType === 'custom'"
      :href="props.node.fields.url"
      :target="props.node.fields.newTab ? '_blank' : undefined"
    >
      <LexicalText :node="child" />
    </a>

    <NuxtLink
      v-else-if="props.node.fields.linkType === 'internal'"
      :to="getInternalLinkPath(props.node.fields.doc.relationTo, props.node.fields.doc.value.slug)"
    >
      <LexicalText :node="child" />
    </NuxtLink>
  </template>
</template>
