<script setup lang="ts">
export interface LexicalText {
  type: 'text'
  text: string
}

const props = defineProps<{
  node: LexicalText
}>()
</script>

<template>
  <span>
    {{ props.node.text }}
  </span>
</template>
