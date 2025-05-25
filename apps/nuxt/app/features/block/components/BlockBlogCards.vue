<script setup lang="ts">
import type { BlogCardsBlock } from '@repo/payload'
import type { BlogCardProps } from '~/features/blog/components/card/BlogCard.vue'
import BlogCard from '~/features/blog/components/card/BlogCard.vue'

const props = defineProps<{
  block: BlogCardsBlock
}>()

const blogs = computed<BlogCardProps[]>(() => {
  const blogs: BlogCardProps[] = []

  if (!props.block.blogCards) {
    return blogs
  }

  props.block.blogCards.forEach((blogCard) => {
    const blog = blogCard.blog

    if (typeof blog === 'number') {
      return
    }

    blogs.push({
      slug: blog.slug,
      title: blog.title,
      description: blog.description || undefined,
    })
  })

  return blogs
})
</script>

<template>
  <section
    :id="props.block.blockName || undefined"
    has-padding
    class="bg-light-alt py-20 md:py-32"
  >
    <div class="flex flex-col items-center justify-center">
      <div v-if="props.block.title" class="mb-16 flex flex-col items-center">
        <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
          {{ props.block.title }}
        </h2>

        <IconsLine />
      </div>

      <!-- Blog cards -->
      <ul
        v-if="blogs.length"
        class="grid w-full max-w-5xl grid-cols-2 gap-8 lg:gap-12"
      >
        <li
          v-for="(blog, index) in blogs"
          :key="index"
        >
          <BlogCard
            :slug="blog.slug"
            :title="blog.title"
            :description="blog.description"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
