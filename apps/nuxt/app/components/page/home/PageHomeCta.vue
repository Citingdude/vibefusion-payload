<script setup lang="ts">
import type { PageHome } from '~~/types/pages/home.type'

defineProps<{
  page: Pick<PageHome['data']['attributes'], 'cta'>
}>()
</script>

<template>
  <AppLayoutSection
    has-padding
    class="bg-dark-300"
  >
    <section class="flex justify-center">
      <div class="container flex flex-col">
        <!-- Heading -->
        <div class="mb-4 flex flex-col">
          <div
            class="mb-3 font-display text-3xl font-bold text-light-main md:text-4xl lg:text-5xl"
            v-html="page.cta.title"
          />
        </div>

        <div class="mb-6 flex">
          <IconsLine />
        </div>

        <!-- Body -->
        <div class="mb-8 max-w-xl font-body text-base text-light-alt md:text-lg lg:text-xl" v-html="page.cta.body" />

        <!-- Button -->
        <AppButton type="internal" color="transparent-white" :to="page.cta.button.url" size="medium">
          {{ page.cta.button.title }}
        </AppButton>
      </div>
    </section>
  </AppLayoutSection>
</template>
