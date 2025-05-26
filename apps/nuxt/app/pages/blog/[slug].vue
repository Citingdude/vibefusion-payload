<script setup lang="ts">
import { blogService } from '~/features/blog/services/blog.service'

const route = useRoute()

const slug = route.params.slug as string

const { data: blog } = await useAsyncData(
  `blog-${slug}`,
  () => blogService.getBySlug(slug),
)
</script>

<template>
  <main v-if="blog">
    <section class="py-8 lg:py-16 bg-light-alt">
      <div
        class="container max-w-[90ch] lg:bg-light-main py-8 sm:px-12
        rounded-2xl shadow-2xl shadow-accent-dark/5"
      >
        <h1
          class="font-display text-3xl lg:text-5xl leading-tight font-semibold"
        >
          {{ blog.title }}
        </h1>

        <div v-if="blog.content">
          <LexicalSerializer color="dark" :root="blog.content.root" />
        </div>
      </div>
    </section>
  </main>
</template>
