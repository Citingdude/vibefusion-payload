<script setup lang=ts>
import { blogService } from '~/services/blogService'

const { data: pageData } = await blogService.fetchAllBlogs()

const blogs = computed(() => pageData?.value?.data || [])

useSeoMeta({
  title: 'Blog - VibeFusion',
  description: 'Lees onze blogs',
  ogTitle: 'Blog - VibeFusion',
  ogDescription: 'Lees onze blogs',
  twitterTitle: 'Blog - VibeFusion',
  twitterDescription: 'Lees onze blogs',
})
</script>

<template>
  <main v-if="pageData">
    <section class="bg-light-alt py-20 md:py-40">
      <div class="container">
        <h1 class="mb-16 font-display text-6xl font-bold">
          Onze blogs
        </h1>

        <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            v-for="blog in blogs"
            :key="blog.id"
            :blog="blog"
          />
        </div>
      </div>
    </section>
  </main>

  <AppError v-else />
</template>
