<script setup lang="ts">
import type PageData from '~/types/pages/webdesign.type'

defineProps({
  page: {
    type: Object as PropType<PageData['data']['attributes']>,
    required: true,
  },
})
</script>

<template>
  <section id="kwaliteiten" class="bg-light-alt py-20 md:py-40">
    <div class="container">
      <!-- Heading -->
      <div class="mb-16 flex w-full flex-col items-center">
        <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
          {{ page?.why?.title }}
        </h2>

        <IconsLine />
      </div>

      <!-- Features grid -->
      <div class="grid gap-8 xl:grid-cols-3">
        <FeaturesCard
          v-for="(benefit, index) in page?.why?.benefits" :key="benefit.id"
          :type="benefit.button ? 'cta' : 'feature'" :icon="benefit.icon"
          :color="index === page?.why?.benefits.length ? 'dark' : 'light'" :title="benefit.title"
          :body="benefit.body" :button="benefit.button" borders="tl-br"
        />
      </div>
    </div>
  </section>
</template>
