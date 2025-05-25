<script setup lang="ts">
import type { LexicalNode } from '~/features/lexical/models/lexicalNode.model'
import { lexicalNodeSchema } from '~/features/lexical/models/lexicalNode.model'

interface RichTextNode {
  [k: string]: unknown
  type: string
  version: number
}

interface LexicalRoot {
  type: string
  children: {
    type: string
    version: number
    [k: string]: unknown
  }[]
  direction: ('ltr' | 'rtl') | null
  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
  indent: number
  version: number
}

const props = withDefaults(defineProps<{
  root: LexicalRoot
  color?: 'light' | 'dark'
}>(), {
  color: 'light',
})

function validateNode(node: (RichTextNode)): LexicalNode | null {
  try {
    return lexicalNodeSchema.parse(node)
  }
  catch (error) {
    console.error(`Validation failed for node of type "${node.type}":`, error)
    console.error(node)

    return null
  }
}

const validatedNodes = computed<LexicalNode[]>(() => {
  const nodes = props.root.children

  if (!nodes) {
    return []
  }

  const validChildren = nodes
    .map(validateNode)
    .filter((node): node is LexicalNode => node !== null)

  return validChildren
})
</script>

<template>
  <div
    class="prose prose-a:text-accent prose-xl marker:text-accent"
    :class="props.color === 'light'
      ? 'text-light-main prose-headings:text-light-main prose-blockquote:text-light-main prose-blockquote:border-accent prose-blockquote:bg-accent-light/10 prose-blockquote:rounded-r-lg'
      : 'text-dark-300 prose-headings:text-dark-400 prose-blockquote:text-dark-400 prose-blockquote:border-accent prose-blockquote:bg-accent-light/10 prose-blockquote:rounded-r-lg'"
  >
    <template v-if="validatedNodes.length">
      <div v-for="(node, i) in validatedNodes" :key="i">
        <LexicalParagraph v-if="node.type === 'paragraph'" :node="node" />
        <LexicalList v-else-if="node.type === 'list'" :node="node" />
        <LexicalLink v-else-if="node.type === 'link'" :node="node" />
        <LexicalImage v-else-if="node.type === 'upload'" :node="node" />
        <LexicalHeading v-else-if="node.type === 'heading'" :node="node" />
        <LexicalQuote v-else-if="node.type === 'quote'" :node="node" />
        <span v-else class="p-2 border border-accent">
          Unsupported node
        </span>
      </div>
    </template>
  </div>
</template>
