<script setup lang="ts">
import type { PageHome } from '~~/types/pages/home.type'

defineProps<{
  page: Pick<PageHome['data']['attributes'], 'services'>
}>()
</script>

<template>
  <AppLayoutSection
    id="onze-diensten"
    has-padding
    class="bg-light-alt"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="mb-16 flex flex-col items-center">
        <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
          Onze diensten
        </h2>

        <IconsLine />
      </div>

      <!-- Service cards -->
      <div class="grid w-full max-w-5xl grid-cols-2 gap-8 lg:gap-12">
        <ServiceCard
          v-for="(service, index) in page.services" :id="index + 1" :key="service.id" :icon="service.icon"
          :title="service.title"
          :cta-title="service.button.title"
          :cta-url="service.button.url"
          :color="service.color"
        />
      </div>
    </div>
  </AppLayoutSection>
</template>
