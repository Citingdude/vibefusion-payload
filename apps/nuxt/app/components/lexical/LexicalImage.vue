<script setup lang="ts">
import type { LexicalUploadNode } from '~/features/lexical/models/lexicalUploadNode.model'

const props = defineProps<{
  node: LexicalUploadNode
}>()
</script>

<template>
  <img
    class="object-cover w-full rounded-xl"
    :src="props.node.value.url"
    :alt="props.node.value.alt"
    :width="props.node.value.width"
    :height="props.node.value.height"
    :style="{
      'object-position': `${props.node.value.focalX} ${props.node.value.focalY}`,
    }"
  >
</template>
