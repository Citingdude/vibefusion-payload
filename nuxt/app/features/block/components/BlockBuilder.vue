<script setup lang="ts">
import type { BlockDto } from '../models/block.model'
import { HeroBlockTransformer } from '../transformers/heroBlock.transformer'
import { ServicesBlockTransformer } from '../transformers/servicesBlock.transformer'
import BlockHero from './BlockHero.vue'
import BlockServices from './BlockServices.vue'

const props = defineProps<{
  blocks: BlockDto[]
}>()
</script>

<template>
  <template v-for="block in props.blocks" :key="block.id">
    <BlockHero
      v-if="block.blockType === 'hero'"
      :block="HeroBlockTransformer.fromDto(block)"
    />
    <BlockServices
      v-else-if="block.blockType === 'service-cards-block'"
      :block="ServicesBlockTransformer.fromDto(block)"
    />
  </template>
</template>
