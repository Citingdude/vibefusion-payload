<script setup lang="ts">
import type { Block } from '~/features/block/types/block.type'
import type { BlockType } from '~/features/block/types/blockType.type'

const props = defineProps<{
  blocks: Block[]
}>()

const BlockHero = defineAsyncComponent(() => import('@blocks/BlockHero.vue'))
const BlockCases = defineAsyncComponent(() => import('@blocks/BlockCases.vue'))
const ServiceCardsblock = defineAsyncComponent(() => import('~/features/block/components/BlockServiceCards.vue'))
const CtaBlock = defineAsyncComponent(() => import('~/features/block/components/BlockCta.vue'))

const blockComponents: Record<BlockType, Component | undefined> = {
  unsupported: undefined,
  hero: BlockHero,
  caseCards: BlockCases,
  serviceCardsBlock: ServiceCardsblock,
  ctaBlock: CtaBlock,
}
</script>

<template>
  <template v-for="block in props.blocks" :key="block.id">
    <component
      :is="blockComponents[block.blockType]"
      :block="block"
    />
  </template>
</template>
