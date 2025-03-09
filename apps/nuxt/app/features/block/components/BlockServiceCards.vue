<script setup lang="ts">
import type { ServiceCardsBlock } from '@repo/payload'
import type { ServiceCardProps } from '~/components/service/ServiceCard.vue'
import { ServiceCardPropsTransformer } from '~/features/service/transformers/serviceCardProps.transformer'

const props = defineProps<{
  block: ServiceCardsBlock
}>()

const services = computed<ServiceCardProps[]>(() => {
  if (!props.block.serviceCardList) {
    return []
  }

  return ServiceCardPropsTransformer.fromServiceCardList(props.block.serviceCardList)
})
</script>

<template>
  <section
    :id="props.block.blockName || undefined"
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
      <div v-if="services.length" class="grid w-full max-w-5xl grid-cols-2 gap-8 lg:gap-12">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :index="index"
          :icon="service.icon"
          :title="service.title"
          :button="service.button"
          color="light"
        />
      </div>
    </div>
  </section>
</template>
