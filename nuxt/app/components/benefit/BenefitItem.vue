<script setup lang=ts>
const props = defineProps({
  type: {
    type: String,
    default: 'normal',
  },
  to: String,
  title: String,
})
</script>

<template>
  <div class="flex items-center space-x-8">
    <!-- Icon -->
    <IconsArrow />

    <!-- Title -->
    <h3
      v-if="props.type === 'normal'"
      class="text-lg text-light-alt sm:text-2xl"
    >
      {{ props.title }}
    </h3>

    <!-- Button -->
    <NuxtLink
      v-if="props.type === 'cta'"
      :to="to"
      class="border-b border-accent text-lg text-light-main transition hover:text-accent sm:text-2xl"
    >
      {{ props.title }}
    </NuxtLink>
  </div>
</template>
