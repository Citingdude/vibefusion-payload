<script setup lang="ts">
export interface BlogCardProps {
  title: string
  slug: string
  description?: string
}

const props = defineProps<BlogCardProps>()
</script>

<template>
  <article
    class="rounded-tl-4xl rounded-br-4xl bg-dark-300
    shadow-2xl shadow-accent-dark/10 p-8 lg:p-16"
  >
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
      class="text-light-alt text-lg line-clamp-2 mt-6"
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
  </article>
</template>
