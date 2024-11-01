<script setup lang="ts">
import { animate, stagger } from 'motion'
import type { PageHome } from '~~/types/pages/home.type'

defineProps<{
  page: Pick<PageHome['data']['attributes'], 'hero'>
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
    easing: 'ease-in-out',
  })
}
</script>

<template>
  <AppLayoutSection class="pt-20 md:pt-32 lg:pb-40 xl:h-[90vh]">
    <div class="grid grid-cols-2 items-center justify-center gap-12 lg:grid-cols-12">
      <div class="anim-fade-in-left col-span-2 max-w-full items-center lg:col-span-6">
        <!-- Heading -->
        <TextH1 id="hero-title" :html="page.hero.title" />

        <!-- Buttons -->
        <AppButtonGroup id="hero-buttons">
          <AppButton
            :to="page.hero.primary_button.url"
            size="large"
            color="purple"
          >
            {{ page.hero.primary_button.title }}
          </AppButton>

          <AppButton
            :to="page.hero.secondary_button.url"
            size="large"
            color="transparent"
          >
            {{ page.hero.secondary_button.title }}
          </AppButton>
        </AppButtonGroup>
      </div>

      <div class="anim-fade-in-right col-span-2 lg:col-span-6">
        <IllustrationHomeHero />
      </div>
    </div>
  </AppLayoutSection>
</template>
