<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'normal',
  },

  title: {
    type: String,
    default: 'Step title',
  },

  content: {
    type: String,
    default: 'Step content',
  },

  number: {
    type: String,
    default: '1',
  },
})
</script>

<template>
  <div
    class="flex flex-row items-center space-x-8 lg:space-x-16"
    :class="{
      'lg:flex-row-reverse lg:space-x-reverse lg:self-start':
        props.direction === 'reverse',
      'lg:self-end': props.direction === 'normal',
    }"
  >
    <!-- Number -->
    <div
      class="flex h-12 w-12 items-center justify-center rounded-full bg-light-main p-4 lg:h-16 lg:w-16"
    >
      <p class="font-display text-3xl font-bold text-accent sm:text-4xl">
        {{ props.number }}
      </p>
    </div>

    <!-- Content -->
    <div class="max-w-lg">
      <h3 class="mb-4 font-display text-2xl font-bold sm:text-3xl">
        {{ props.title }}
      </h3>

      <div class="text-lg" v-html="props.content" />
    </div>
  </div>
</template>
