<script setup lang="ts">
import type { KpiBlock, KpiCard as KpiCardType } from '@repo/payload'
import KpiCard from '~/features/kpi/components/KpiCard.vue'

const props = defineProps<{
  block: KpiBlock
}>()

const kpiCards = computed<KpiCardType[]>(() => {
  if (!props.block.kpiCards) {
    return []
  }

  return props.block.kpiCards.map((card) => {
    return {
      body: card.kpiCard.body,
      title: card.kpiCard.title,
      icon: card.kpiCard.icon,
    }
  })
})
</script>

<template>
  <section
    :id="props.block.blockName || undefined"
    class="py-20 md:py-32 bg-light-alt"
  >
    <div class="container">
      <div class="mb-16 flex w-full flex-col items-center">
        <h2
          v-if="props.block.title"
          class="mb-4 font-display text-4xl font-bold lg:text-5xl"
        >
          {{ props.block.title }}
        </h2>

        <IconsLine />
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          v-for="(card, index) in kpiCards" :key="index"
          :icon="card.icon"
          :title="card.title"
          :body="card.body"
        />
      </div>
    </div>
  </section>
</template>
