<script setup lang="ts">
interface Props {
  question: string
  answer: string
}
defineProps<Props>()

const isOpen = ref(false)
</script>

<template>
  <div class="cursor-pointer" @click="isOpen = !isOpen">
    <!-- Question -->
    <div
      class="flex items-center space-x-4 rounded-full p-4 transition hover:bg-dark-200"
    >
      <IconsArrow
        class="min-w-max overflow-visible transition"
        :class="{ 'rotate-90': isOpen }"
      />

      <h3
        class="font-display text-lg font-semibold text-light-main sm:text-2xl lg:text-3xl"
      >
        {{ question }}
      </h3>
    </div>

    <!-- Answer -->
    <div v-if="isOpen">
      <div class="max-w-3xl p-4 text-light-alt sm:text-lg" v-html="answer" />
    </div>
  </div>
</template>
