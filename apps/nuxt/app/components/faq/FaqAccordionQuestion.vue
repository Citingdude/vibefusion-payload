<script setup lang="ts">
interface Props {
  question: string
  answer: string
}
defineProps<Props>()

const isOpen = ref(false)
</script>

<template>
  <div>
    <!-- Question -->
    <button class="cursor-pointer" @click="isOpen = !isOpen">
      <h3
        class="flex items-center space-x-4 rounded-full p-4 transition duration-100 hover:bg-dark-200 active:scale-95"
      >
        <IconsArrow
          class="min-w-max overflow-visible transition"
          :class="{ 'rotate-90': isOpen }"
        />

        <span
          class="font-display text-lg font-semibold text-light-main sm:text-2xl lg:text-3xl"
        >
          {{ question }}
        </span>
      </h3>
    </button>

    <!-- Answer -->
    <div v-if="isOpen">
      <div class="max-w-3xl p-4 text-light-alt sm:text-lg" v-html="answer" />
    </div>
  </div>
</template>
