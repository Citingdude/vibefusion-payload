<script setup lang="ts">
defineProps({
  imageUrl: {
    type: String,
    default: '',
  },

  caseTitle: {
    type: String,
    default: 'Case Title',
  },

  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <!-- Image -->
    <div>
      <img class="aspect-70/40 h-auto w-full rounded-tr-4xl object-cover" :src="imageUrl" alt="">
    </div>

    <!-- Content -->
    <div class="rounded-bl-4xl bg-dark-300 p-12 sm:p-16">
      <h3 class="mb-8 font-display text-3xl font-semibold text-light-main sm:text-4xl">
        {{ caseTitle }}
      </h3>

      <div class="flex text-light-main">
        <AppButton type="internal" :to="`/cases/${link}`" color="transparent" size="md">
          Lees de case
        </AppButton>
      </div>
    </div>
  </div>
</template>
