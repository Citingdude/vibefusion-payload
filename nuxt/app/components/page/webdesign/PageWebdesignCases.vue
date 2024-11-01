<script setup lang="ts">
import type Case from '~/types/case/case.type'

defineProps({
  cases: {
    type: Array as PropType<Case[]>,
    required: true,
  },
})
</script>

<template>
  <section class="py-20 md:py-40">
    <div class="container">
      <!-- Heading -->
      <div class="mb-16 flex w-full flex-col items-center">
        <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
          Recente projecten
        </h2>

        <IconsLine />
      </div>

      <!-- Cases -->
      <div>
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
  </section>
</template>
