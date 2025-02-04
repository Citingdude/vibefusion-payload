<script setup lang="ts">
const { data: cases } = await fetchCases()
</script>

<template>
  <div>
    <Head>
      <Title>Cases - VibeFusion</Title>
      <Meta name="description" content="Lees onze cases" />
    </Head>

    <!-- Hero -->
    <section class="container py-20 md:py-32">
      <LayoutHeading class="mb-16 flex text-center" title="Projecten waar we trots op zijn" size="h1" />

      <!-- Cases -->
      <div class="grid gap-16 lg:grid-cols-2">
        <CasesCardCompact
          v-for="caseCard in cases" :key="caseCard.id" :case-title="caseCard.attributes.Title"
          :image-url="caseCard.attributes.Image.data.attributes.url" :link="caseCard.attributes.slug"
        />
      </div>
    </section>
  </div>
</template>
