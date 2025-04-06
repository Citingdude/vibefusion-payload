<script setup lang="ts">
import type { HeroBlock } from '@repo/payload'
import { animate, stagger } from 'motion'
import TextHighlight from '~/components/text/TextHighlight.vue'
import CmsImage from '~/features/cms/CmsImage.vue'
import CmsLink from '~/features/cms/CmsLink.vue'
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
  <section
    :id="props.block.blockName || undefined"
    class="pt-20 lg:pb-40 xl:min-h-[90vh] flex flex-col justify-center"
  >
    <div class="container">
      <div class="grid grid-cols-2 items-center justify-center gap-32 lg:grid-cols-5">
        <!-- Column -->
        <div class="anim-fade-in-left col-span-2 max-w-full lg:col-span-3 flex flex-col gap-16">
          <div class="flex flex-col gap-8">
            <TextHighlight v-if="props.block.highlightTitle.html">
              <TextH1 id="hero-title" class="font-medium" :html="props.block.highlightTitle.html" />
            </TextHighlight>

            <p v-if="props.block.body" class="text-2xl">
              {{ props.block.body }}
            </p>
          </div>

          <AppButtonGroup id="hero-buttons">
            <CmsLink
              v-for="(link, index) in props.block.links" :key="index"
              :link-field="link.link"
              :color="index % 2 === 0 ? 'purple' : 'white'"
            />
          </AppButtonGroup>
        </div>

        <!-- Column -->
        <div v-if="image" class="anim-fade-in-right col-span-2 lg:col-span-2">
          <CmsImage
            class="w-full h-auto object-cover"
            :src="image.src"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
