<script setup lang="ts">
import { lexicalRootNodeSchema } from '~/features/lexical/models/lexicalRootNode.model'

const props = defineProps<{
  root: any
}>()

const validatedRoot = computed(() => {
  const result = lexicalRootNodeSchema.safeParse(props.root)

  return result
})
</script>

<template>
  <div class="prose prose-a:text-accent prose-xl">
    <p v-if="validatedRoot.error" class="text-white">
      Root: {{ validatedRoot.data }}
    </p>

    <template v-else>
      <div v-for="(node, i) in validatedRoot.data.children" :key="i">
        <LexicalParagraph v-if="node.type === 'paragraph'" :node="node" />
        <span v-else class="p-2 border border-accent">
          Unsupported node: {{ node.type }}
        </span>
      </div>
    </template>
  </div>
</template>
