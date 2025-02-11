<script setup lang="ts">
import { type AsyncComponentLoader, type Component, defineAsyncComponent, defineProps } from 'vue'
import type { Block } from '~/features/block/types/block.type'
import type { BlockType } from '~/features/block/types/blockType.type'

const props = defineProps<{
  blocks: Block[]
}>()

const BlockHero = defineAsyncComponent(() => import('~/features/block/components/BlockHero.vue'))
const BlockCases = defineAsyncComponent(() => import('@blocks/BlockCases.vue'))
const BlockUnsupported = defineAsyncComponent(() => import('~/features/block/components/BlockUnsupported.vue'))

const blockComponents: Record<BlockType, Component> = {
  hero: BlockHero,
  caseCards: BlockCases,
}
</script>

<template>
  <template v-for="(block, index) in props.blocks" :key="index">
    <component
      :is="blockComponents[block.blockType] || BlockUnsupported"
      :block="block"
    />
  </template>
</template>
