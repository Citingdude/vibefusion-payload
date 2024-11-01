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
  <!-- Faq -->
  <section class="bg-light-main py-20 md:py-40">
    <div class="container">
      <!-- Heading -->
      <div class="mb-16 flex flex-col items-center sm:items-start">
        <h2 class="mb-4 text-center font-display text-4xl font-bold sm:text-left lg:text-5xl">
          {{ page?.faq?.title }}
        </h2>

        <IconsLine />
      </div>

      <FaqAccordion>
        <FaqAccordionQuestion
          v-for="question in page?.faq?.questions" :key="question.id"
          :question="question.question" :answer="question.answer"
        />
      </FaqAccordion>
    </div>
  </section>
</template>
