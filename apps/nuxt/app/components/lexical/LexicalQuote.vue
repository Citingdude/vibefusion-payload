<script setup lang="ts">
import type { LexicalQuoteNode } from '~/features/lexical/models/lexicalQuoteNode.model'

const props = defineProps<{
  node: LexicalQuoteNode
}>()
</script>

<template>
  <blockquote>
    <span v-for="(childNode, index) in props.node.children" :key="index">
      <LexicalText :node="childNode" />
    </span>
  </blockquote>
</template>
