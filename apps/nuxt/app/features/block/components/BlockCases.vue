<script setup lang="ts">
import type { CaseCardsBlock } from '~/features/block/types/caseCardsBlock.type'
import CaseCard from '~/features/case/components/CaseCard.vue'

const props = defineProps<{
  block: CaseCardsBlock
}>()
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
            v-for="(caseCard, index) in props.block.cases"
            :key="caseCard.id"
            :description="caseCard.case.description"
            :image="caseCard.case.image"
            :title="caseCard.case.title"
            :slug="caseCard.case.title"
            :image-order="index % 2 === 0 ? 'order-2' : 'order-1'"
            :content-order="index % 2 === 0 ? 'order-1' : 'order-2'"
          />
        </div>
      </div>
    </div>
  </section>
</template>
