<script setup lang="ts">
const [
  { data: page },
  { data: cases },
] = await Promise.all([
  fetchPageWebdesign(),
  fetchCases(),
])

useSeoMeta({
  title: 'Webdesign - VibeFusion',
  description: 'Scoor online met een conversiegerichte website.',
})
</script>

<template>
  <main v-if="page">
    <PageWebdesignHero :page="page" />
    <PageWebdesignFeatures :page="page" />
    <PageWebdesignCases v-if="cases" :cases="cases" />
    <PageWebdesignRoadmap :page="page" />
    <PageWebdesignFaq :page="page" />
  </main>

  <AppError v-else />
</template>
