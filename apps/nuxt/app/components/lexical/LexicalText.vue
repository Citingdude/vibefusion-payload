<script setup lang="ts">
export interface LexicalText {
  type: 'text'
  text?: string
  format: number
}

const props = defineProps<{
  node: LexicalText
}>()

const component = computed<string>(() => {
  switch (props.node.format) {
    case 1:
      return 'strong'

    case 2:
      return 'em'

    default:
      return 'span'
  }
})
</script>

<template>
  <component :is="component">
    {{ props.node.text }}
  </component>
</template>
