<script setup lang="ts">
import type { Block } from '~/features/block/types/block.type'
import type { BlockType } from '~/features/block/types/blockType.type'

const props = defineProps<{
  blocks: Block[]
}>()

const BlockHero = defineAsyncComponent(() => import('@blocks/BlockHero.vue'))
const BlockCases = defineAsyncComponent(() => import('@blocks/BlockCases.vue'))
const BlockUnsupported = defineAsyncComponent(() => import('@blocks/BlockUnsupported.vue'))

const blockComponents: Record<BlockType, Component> = {
  hero: BlockHero,
  caseCards: BlockCases,
}
</script>

<template>
  <template v-for="block in props.blocks" :key="block.id">
    <component
      :is="blockComponents[block.blockType] || BlockUnsupported"
      :block="block"
    />
  </template>
</template>
