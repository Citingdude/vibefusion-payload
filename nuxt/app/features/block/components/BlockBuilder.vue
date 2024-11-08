<script setup lang="ts">
import type { BlockDto } from '../models/block.model'
import BlockHero from './BlockHero.vue'

const props = defineProps<{
  blocks: BlockDto[]
}>()
</script>

<template>
  <template v-for="block in props.blocks" :key="block.id">
    <BlockHero
      v-if="block.blockType === 'hero'"
      :block="block"
    />
  </template>
</template>
