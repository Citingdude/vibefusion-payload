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
  <section class="bg-light-alt py-20 md:py-40 xl:px-20">
    <div class="container">
      <!-- Heading -->
      <div class="mb-16 flex w-full flex-col items-center">
        <h2 class="mb-4 text-center font-display text-4xl font-bold lg:text-5xl">
          {{ page?.process?.title }}
        </h2>

        <IconsLine />
      </div>

      <!-- Roadmap -->
      <div class="flex flex-col space-y-8">
        <RoadmapStep
          v-for="(step, index) in page?.process?.steps" :key="step.id"
          :direction="index % 2 === 0 ? 'reverse' : 'normal'" :title="step.title" :content="step.body"
          :number="(index + 1).toString()"
        />
      </div>
    </div>
  </section>
</template>
