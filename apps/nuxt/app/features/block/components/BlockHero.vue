<script setup lang="ts">
import type { HeroBlock } from '~/features/block/types/heroBlock.type'
import { animate, stagger } from 'motion'

const props = defineProps<{
  block: HeroBlock
}>()

onMounted(() => {
  useAnimation()
})

function useAnimation() {
  if (!document)
    return

  const title = document.querySelector('#hero-title')
  const buttons = document.querySelectorAll('#hero-buttons')

  if (!title || !buttons)
    return

  const elements = [title, ...buttons]

  animate(elements, {
    y: [-50, 0],
    opacity: [0, 1],
  }, {
    delay: stagger(0.4),
    duration: 0.6,
    ease: 'easeInOut',
  })
}
</script>

<template>
  <AppLayoutSection class="pt-20 md:pt-32 lg:pb-40 xl:h-[90vh]">
    <div class="grid grid-cols-2 items-center justify-center gap-12 lg:grid-cols-12">
      <div class="anim-fade-in-left col-span-2 max-w-full items-center lg:col-span-6">
        <!-- Heading -->
        <TextH1 id="hero-title" :html="props.block.title" />

        <p>
          {{ props.block.body }}
        </p>

        <!-- Buttons -->
        <AppButtonGroup id="hero-buttons">
          <AppButton
            v-for="(button, index) in props.block.buttons"
            :key="index"
            :to="button.link"
            size="lg"
            :color="button.color"
          >
            {{ button.label }}
          </AppButton>
        </AppButtonGroup>
      </div>

      <div class="anim-fade-in-right col-span-2 lg:col-span-6">
        <img
          v-if="props.block.image"
          :src="props.block.image.src"
          :alt="props.block.image.alt"
          class="aspect-[140/53] w-full h-auto"
        >
      </div>
    </div>
  </AppLayoutSection>
</template>
