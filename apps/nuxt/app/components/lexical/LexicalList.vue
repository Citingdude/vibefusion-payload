<script setup lang="ts">
import type { LexicalListNode } from '~/features/lexical/models/lexicalListNode.model'

const props = defineProps<{
  node: LexicalListNode
}>()
</script>

<template>
  <component :is="node.tag">
    <LexicalListItem v-for="(childNode, index) in props.node.children" :key="index" :node="childNode" />
  </component>
</template>
