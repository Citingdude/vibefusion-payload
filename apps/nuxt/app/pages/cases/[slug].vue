<script setup lang="ts">
const route = useRoute('cases-slug')
const slug = route.params.slug

const { data: project } = useFetch(`/api/cases/${slug}`)
</script>

<template>
  <main v-if="project">
    <section class="py-24">
      <div class="container prose max-w-3xl prose-p:text-xl">
        <pre>
          {{ project }}
        </pre>
      </div>
    </section>
  </main>
</template>
