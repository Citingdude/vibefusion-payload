<script setup lang="ts">
import type { FaqBlock, FaqItem } from '@repo/payload'

const props = defineProps<{
  block: FaqBlock
}>()

const faqItems = computed<FaqItem[]>(() => {
  if (!props.block.faqItems) {
    return []
  }

  return props.block.faqItems.map((item) => {
    return {
      answer: item.faqItem.answer,
      question: item.faqItem.question,
    }
  })
})
</script>

<template>
  <!-- Faq -->
  <section class="bg-light-main py-20 md:py-32">
    <div class="container">
      <!-- Heading -->
      <div class="mb-16 flex flex-col items-center sm:items-start">
        <h2 v-if="props.block.title" class="mb-4 text-center font-display text-4xl font-bold sm:text-left lg:text-5xl">
          {{ props.block.title }}
        </h2>

        <IconsLine />
      </div>

      <FaqAccordion>
        <FaqAccordionQuestion
          v-for="(question, index) in faqItems"
          :key="index"
          :question="question.question"
          :answer="question.answer"
        />
      </FaqAccordion>
    </div>
  </section>
</template>
