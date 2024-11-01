<script setup lang="ts">
const [
  { data: page },
  { data: cases },
] = await Promise.all([
  fetchPageHome(),
  fetchCases(),
])

const baseURL = useRuntimeConfig().public.payloadApiBaseUrl

const { data } = useFetch('/pages', {
  baseURL,
  server: false,
})

const facebookMeta = computed(() => {
  return page.value?.seo?.metaSocial?.find(social => social.socialNetwork === 'Facebook')
})
const twitterMeta = computed(() => {
  return page.value?.seo?.metaSocial?.find(social => social.socialNetwork === 'Twitter')
})

useSeoMeta({
  title: page.value?.seo?.metaTitle ?? 'VibeFusion',
  description: page.value?.seo?.metaDescription ?? 'Versterk je merk met de juiste Vibe.',
  ogTitle: facebookMeta.value?.title ?? 'VibeFusion',
  ogDescription: facebookMeta.value?.description ?? 'Versterk je merk met de juiste Vibe.',
  twitterTitle: twitterMeta.value?.title ?? 'VibeFusion',
  twitterDescription: twitterMeta.value?.description ?? 'Versterk je merk met de juiste Vibe.',
})

useCanonicalURL(page.value?.seo?.canonicalURL)
</script>

<template>
  <main v-if="page">
    <pre>
      {{ data }}
    </pre>
    <PageHomeHero :page="page" />
    <PageHomeServices :page="page" />
    <PageHomeCases v-if="cases" :cases="cases" />
    <PageHomeCta :page="page" />
  </main>

  <AppError v-else />
</template>
