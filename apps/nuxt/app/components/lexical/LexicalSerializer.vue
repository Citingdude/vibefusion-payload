<script setup lang="ts">
import type { RichTextField } from '@repo/payload'
import type { LexicalRootNode } from '~/features/lexical/models/lexicalRootNode.model'
import { lexicalRootNodeSchema } from '~/features/lexical/models/lexicalRootNode.model'

const props = withDefaults(defineProps<{
  root: RichTextField
  color?: 'light' | 'dark'
}>(), {
  color: 'light',
})

const validatedRoot = computed<LexicalRootNode>(() => {
  let result: LexicalRootNode | null = null

  try {
    result = lexicalRootNodeSchema.parse(props.root.richtext?.root)

    return result
  }
  catch (error) {
    console.error(error)
  }

  return props.root.richtext?.root as unknown as LexicalRootNode
})
</script>

<template>
  <div
    class="prose prose-a:text-accent prose-xl"
    :class="props.color === 'light'
      ? 'text-light-main prose-headings:text-light-main'
      : 'text-dark-400'"
  >
    <p v-if="!validatedRoot" class="text-white">
      <pre>
        Root: {{ validatedRoot }}
      </pre>
    </p>

    <template v-else>
      <div v-for="(node, i) in validatedRoot.children" :key="i">
        <LexicalParagraph v-if="node.type === 'paragraph'" :node="node" />
        <LexicalList v-else-if="node.type === 'list'" :node="node" />
        <LexicalLink v-else-if="node.type === 'link'" :node="node" />
        <LexicalImage v-else-if="node.type === 'upload'" :node="node" />
        <LexicalHeading v-else-if="node.type === 'heading'" :node="node" />
        <span v-else class="p-2 border border-accent">
          Unsupported node
        </span>
      </div>
    </template>
  </div>
</template>
