<script setup lang="ts">
import type { CtaBlock } from '@repo/payload'

const props = defineProps<{
  block: CtaBlock
}>()
</script>

<template>
  <AppLayoutSection
    has-padding
    class="bg-dark-300"
  >
    <section class="flex justify-center">
      <div class="container flex flex-col">
        <!-- Heading -->
        <div class="mb-4 flex flex-col">
          <TextH2
            class="mb-3 font-display text-3xl font-bold text-light-main md:text-4xl lg:text-5xl max-w-xl"
          >
            {{ props.block.title }}
          </TextH2>
        </div>

        <div class="mb-6 flex">
          <IconsLine />
        </div>

        <LexicalSerializer color="light" :root="props.block.body.root" />

        <!-- Button -->
        <AppButton
          type="internal"
          :color="props.block.button.color"
          :to="props.block.button.link"
          size="md"
        >
          {{ props.block.button.label }}
        </AppButton>
      </div>
    </section>
  </AppLayoutSection>
</template>
