<script setup lang="ts">
import type { LexicalHeadingNode } from '~/features/lexical/models/lexicalHeadingNode.model'

const props = defineProps<{
  node: LexicalHeadingNode
}>()
</script>

<template>
  <component :is="props.node.tag">
    <LexicalText
      v-for="(childNode, index) in props.node.children"
      :key="index"
      :node="childNode"
    />
  </component>
</template>
