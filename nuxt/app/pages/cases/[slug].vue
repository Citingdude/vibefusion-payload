<script setup lang="ts">
import type PageData from '~~/types/pages/case.type'

const route = useRoute('cases-slug')
const slug = route.params.slug

const { data: pageData } = await useApiFetch<PageData>('cases', {
  query: {
    'filters[slug][$eq]': slug,
    'populate': '*',
  },
})
</script>

<template>
  <main v-if="pageData">
    <!-- Content -->
    <section class="py-24">
      <div class="container prose max-w-3xl prose-p:text-xl">
        <img
          class="aspect-[3/2] max-h-[25rem] w-full rounded-2xl object-cover"
          :src="pageData?.data[0]?.attributes?.Image?.data?.attributes?.url"
          :alt="pageData?.data[0].attributes.Image.data.attributes.alternativeText || ''"
        >

        <h1 class="mt-20" font-weight="700">
          {{ pageData?.data[0].attributes.Title }}
        </h1>
        <!-- Content -->
        <div v-html="pageData?.data[0].attributes.Body" />
      </div>
    </section>
  </main>

  <AppError v-else />
</template>
