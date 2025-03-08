<script setup lang="ts">
import type { LexicalParagraphNode } from '~/features/lexical/models/lexicalParagraphNode.model'

const props = defineProps<{
  node: LexicalParagraphNode
}>()
</script>

<template>
  <p>
    <template v-for="(child, index) in props.node.children" :key="index">
      <LexicalText v-if="child.type === 'text'" :node="child" />
      <LexicalLink v-else-if="child.type === 'link'" :node="child" />
      <LexicalLinebreak v-else-if="child.type === 'linebreak'" />
    </template>
  </p>
</template>
