<script setup lang="ts">
import type { RichTextField } from '@repo/payload'

interface Props {
  question: string
  answer: RichTextField | undefined
}
const props = defineProps<Props>()

const isOpen = ref(false)
</script>

<template>
  <div>
    <!-- Question -->
    <button
      class="cursor-pointer rounded-full hover:bg-dark-200 active:scale-95 outline-accent focus-visible:outline-dashed"
      @click="isOpen = !isOpen"
    >
      <h3
        class="flex items-center space-x-4 p-2 sm:p-4 transition duration-100"
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
      <LexicalSerializer
        v-if="props.answer"
        class="max-w-3xl px-4 text-light-alt sm:text-xl"
        :root="props.answer"
      />
    </div>
  </div>
</template>
