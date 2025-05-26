<script setup lang="ts">
import type { BlogCardsBlock, BlogCategory, Media } from '@repo/payload'
import type { BlogCardProps } from '~/features/blog/components/card/BlogCard.vue'
import type { Image } from '~/features/image/types/image.type'
import BlogCard from '~/features/blog/components/card/BlogCard.vue'

const props = defineProps<{
  block: BlogCardsBlock
}>()

function getImage(image: number | Media | null | undefined): Image | undefined {
  if (!image) {
    return undefined
  }

  if (typeof image === 'number') {
    return undefined
  }

  if (!image.url) {
    return undefined
  }

  return {
    src: image.url,
    alt: image.alt,
  }
}

function getCategories(categories: (number | BlogCategory)[] | null | undefined): BlogCategory[] {
  const blogCategories: BlogCategory[] = []

  if (!categories) {
    return blogCategories
  }

  categories.forEach((category) => {
    if (typeof category === 'number') {
      return
    }

    blogCategories.push(category)
  })

  return blogCategories
}

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
      image: getImage(blog.image),
      categories: getCategories(blog.category),
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
    <div class="container flex flex-col items-center justify-center">
      <div v-if="props.block.title" class="mb-16 flex flex-col items-center">
        <h2 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
          {{ props.block.title }}
        </h2>

        <IconsLine />
      </div>

      <!-- Blog cards -->
      <ul
        v-if="blogs.length"
        class="grid w-full max-w-5xl sm:grid-cols-2 gap-8 lg:gap-12"
      >
        <li
          v-for="(blog, index) in blogs"
          :key="index"
        >
          <BlogCard
            :slug="blog.slug"
            :title="blog.title"
            :description="blog.description"
            :image="blog.image"
            :categories="blog.categories"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
