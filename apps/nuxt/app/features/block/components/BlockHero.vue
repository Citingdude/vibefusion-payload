<script setup lang="ts">
import type { HeroBlock } from '@repo/payload'
import { animate, stagger } from 'motion'
import TextHighlight from '~/components/text/TextHighlight.vue'
import { ImageTransformer } from '~/features/image/transformers/image.transformer'

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

const image = computed(() => {
  return props.block.image
    ? ImageTransformer.fromDto(props.block.image)
    : null
})
</script>

<template>
  <section :id="props.block.blockName || undefined" class="pt-20 md:pt-32 lg:pb-40 xl:min-h-[90vh] flex flex-col justify-center">
    <div class="container">
      <div class="grid grid-cols-2 items-center justify-center gap-12 lg:grid-cols-12">
        <div class="anim-fade-in-left col-span-2 max-w-full items-center lg:col-span-6">
          <!-- Heading -->
          <TextHighlight v-if="props.block.highlightTitle.html">
            <TextH1 id="hero-title" :html="props.block.highlightTitle.html" />
          </TextHighlight>

          <p>
            {{ props.block.body }}
          </p>

          <!-- Buttons -->
          <AppButtonGroup id="hero-buttons">
            <AppButton
              v-for="(button, index) in props.block.buttons"
              :key="index"
              :to="button.button.link"
              size="lg"
              :color="button.button.color"
            >
              {{ button.button.label }}
            </AppButton>
          </AppButtonGroup>
        </div>

        <div v-if="image" class="anim-fade-in-right col-span-2 lg:col-span-6">
          <img class="aspect-[140/53] w-full h-auto" :src="image.src" :alt="image.alt">
        </div>
      </div>
    </div>
  </section>
</template>
