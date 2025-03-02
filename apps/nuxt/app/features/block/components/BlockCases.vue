<script setup lang="ts">
import type { CaseCardsBlock } from '@repo/payload'
import type { CaseCardProps } from '~/features/case/components/CaseCard.vue'
import CaseCard from '~/features/case/components/CaseCard.vue'
import { CaseTransformer } from '~/features/case/transformers/case.transformer'

const props = defineProps<{
  block: CaseCardsBlock
}>()

const cases = computed<CaseCardProps[]>(() => {
  if (!props.block.caseCards) {
    return []
  }

  const caseCards = props.block.caseCards.map(caseCard => caseCard.case)

  return CaseTransformer.toCaseCardPropsArray(caseCards)
})
</script>

<template>
  <section id="cases" class="py-20 md:py-32">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <!-- Section heading -->
        <div class="mb-16 flex flex-col items-center">
          <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
            {{ props.block.title }}
          </h2>

          <IconsLine />
        </div>

        <!-- Cases -->
        <div class="space-y-12">
          <CaseCard
            v-for="(caseCard, index) in cases"
            :key="index"
            :description="caseCard.description"
            :image="caseCard.image"
            :title="caseCard.title"
            :slug="caseCard.slug"
            :image-order="index % 2 === 0 ? 'order-2' : 'order-1'"
            :content-order="index % 2 === 0 ? 'order-1' : 'order-2'"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>
