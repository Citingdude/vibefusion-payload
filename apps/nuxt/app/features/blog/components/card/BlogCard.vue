<script setup lang="ts">
import type { BlogCategory } from '@repo/payload'
import type { Image } from '~/features/image/types/image.type'

export interface BlogCardProps {
  title: string
  slug: string
  description?: string
  image?: Image
  categories?: BlogCategory[]
}

const props = defineProps<BlogCardProps>()
</script>

<template>
  <article
    class="rounded-tl-4xl rounded-br-4xl bg-dark-300
    shadow-2xl shadow-accent-dark/10"
  >
    <img
      v-if="props.image"
      class="rounded-tl-4xl w-full object-cover aspect-3/2"
      :src="props.image.src"
      :alt="props.image.alt"
    >

    <div class="p-6 lg:p-12">
      <ul
        v-if="props.categories?.length"
        class="flex gap-2 mb-6 flex-wrap"
      >
        <li
          v-for="category in props.categories"
          :key="category.id"
          class="flex"
        >
          <AppBadge :label="category.name" />
        </li>
      </ul>

      <!-- Title -->
      <h2
        class="font-display text-2xl lg:text-3xl font-medium
        text-light-main line-clamp-3"
      >
        {{ props.title }}
      </h2>

      <!-- Description -->
      <p
        v-if="props.description"
        class="text-light-alt text-lg line-clamp-4 mt-6"
      >
        {{ props.description }}
      </p>

      <!-- Button -->
      <AppButton
        color="transparentWhite"
        class="mt-12"
        :to="`/blog/${props.slug}`"
      >
        Lees meer
      </AppButton>
    </div>
  </article>
</template>
