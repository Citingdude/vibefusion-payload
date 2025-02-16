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
  <section class="container grid gap-16 pb-20 pt-16 lg:grid-cols-2 lg:pb-40 lg:pt-32">
    <!-- Content -->
    <div>
      <div class="mb-4 font-display text-4xl font-bold lg:text-5xl" v-html="page.hero.title" />

      <div class="mb-12 text-lg" v-html="page.hero.body" />

      <!-- Buttons -->
      <div class="flex flex-col space-y-4 xl:flex-row xl:space-x-8 xl:space-y-0">
        <AppButton
          v-for="button in page.hero.buttons" :key="button.id" :type="button.type" :color="button.color"
          :to="button.url" size="md"
        >
          {{ button.title }}
        </AppButton>
      </div>
    </div>

    <!-- Illustration -->
    <div>
      <img class="max-w-lg" src="~/assets/images/webdesign-illustratie.svg" alt="">
    </div>
  </section>
</template>
