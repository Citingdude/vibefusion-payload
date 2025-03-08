<script setup lang="ts">
import type { LexicalListItem } from '~/features/lexical/models/lexicalListNode.model'

const props = defineProps<{
  node: LexicalListItem
}>()
</script>

<template>
  <li>
    <template v-for="(childNode, index) in props.node.children" :key="index">
      <LexicalText v-if="childNode.type === 'text'" :node="childNode" />
    </template>
  </li>
</template>
