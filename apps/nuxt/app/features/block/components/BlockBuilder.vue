<script setup lang="ts">
import BlockCases from '~/features/block/components/BlockCases.vue'
import BlockHero from '~/features/block/components/BlockHero.vue'
import BlockUnsupported from '~/features/block/components/BlockUnsupported.vue'
import type { Block } from '~/features/block/types/block.type'

const props = defineProps<{
  blocks: Block[]
}>()
</script>

<template>
  <template v-for="(block, index) in props.blocks" :key="index">
    <BlockHero
      v-if="block.blockType === 'hero'"
      :block="block"
    />
    <BlockCases
      v-else-if="block.blockType === 'casesBlock'"
      :block="block"
    />
    <BlockUnsupported v-else />
  </template>
</template>
