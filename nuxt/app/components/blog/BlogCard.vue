<script setup lang="ts">
import type Blog from '~/types/blog/blog.type'

defineProps<{
  blog: Blog
}>()
</script>

<template>
  <div class="transition-transform hover:-translate-y-4">
    <NuxtLink :to="`/blog/${blog.attributes.slug}`" class="shadow-2xl">
      <!-- Image -->
      <img
        class="aspect-[44/30] w-full rounded-tl-4xl"
        :src="blog.attributes.image.data.attributes.url"
        :alt="blog.attributes.image.data.attributes.alternativeText || ''"
      >

      <!-- Content -->
      <div class="rounded-br-4xl bg-dark-300 p-8">
        <!-- Title -->
        <h1 class="mb-8 font-display text-3xl font-medium text-light-main">
          {{ blog.attributes.title }}
        </h1>

        <!-- Button -->
        <div class="flex">
          <AppButton
            type="event"
            color="transparent-white"
            size="medium"
            button
          >
            Lees de blog
          </AppButton>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
