<script setup lang="ts">
import type Cases from '~~/types/case/cases.type'

defineProps<{
  cases: Cases['data']
}>()
</script>

<template>
  <AppLayoutSection
    id="cases"
    has-padding
  >
    <div class="flex flex-col items-center justify-center">
      <!-- Section heading -->
      <div class="mb-16 flex flex-col items-center">
        <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
          Cases
        </h2>

        <IconsLine />
      </div>

      <!-- Cases -->
      <div class="space-y-12">
        <CasesCard
          v-for="(casePage, index) in cases" :key="casePage.id"
          :badge-text="casePage.attributes.category.data.attributes.Title" :title="casePage.attributes.Title"
          :summary="casePage.attributes.summary" :image-url="casePage.attributes.Image.data.attributes.url"
          :image-alt="casePage.attributes.Image.data.attributes.name" :link="`/cases/${casePage.attributes.slug}`"
          :image-order="index % 2 === 0 ? 'order-2' : 'order-1'"
          :content-order="index % 2 === 0 ? 'order-1' : 'order-2'"
        />
      </div>
    </div>
  </AppLayoutSection>
</template>
