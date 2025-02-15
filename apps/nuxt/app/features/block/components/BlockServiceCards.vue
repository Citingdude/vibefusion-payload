<script setup lang="ts">
import type { ServiceCardsBlock } from '~/features/block/types/serviceCardsBlock.type'

const props = defineProps<{
  block: ServiceCardsBlock
}>()
</script>

<template>
  <section
    id="onze-diensten"
    has-padding
    class="bg-light-alt py-20 md:py-32"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="mb-16 flex flex-col items-center">
        <h2
          v-if="props.block.title"
          class="mb-4 font-display text-4xl font-bold lg:text-5xl"
        >
          {{ props.block.title }}
        </h2>

        <IconsLine />
      </div>

      <!-- Service cards -->
      <div class="grid w-full max-w-5xl grid-cols-2 gap-8 lg:gap-12">
        <ServiceCard
          v-for="(service, index) in props.block.serviceCards"
          :id="index + 1"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :button="service.button"
          color="light"
        />
      </div>
    </div>
  </section>
</template>
