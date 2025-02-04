<script setup lang="ts">
import BlockCases from '~/features/block/components/BlockCases.vue'
import BlockCta from '~/features/block/components/BlockCta.vue'
import BlockHero from '~/features/block/components/BlockHero.vue'
import BlockServices from '~/features/block/components/BlockServices.vue'
import type { CasesBlock } from '~/features/block/models/casesBlock.model'
import type { CtaBlock } from '~/features/block/models/ctaBlock.model'
import type { ServicesBlock } from '~/features/block/models/servicesBlock.model'
import { HeroBlockTransformer } from '~/features/block/transformers/heroBlock.transformer'
import type { HeroBlock } from '~/features/block/types/heroBlock.type'

// const heroBlock: HeroBlock = {
//   blockName: 'hero',
//   blockType: 'hero',
//   body: '',
//   buttons: [
//     {
//       id: 'services',
//       button: {
//         label: 'Onze diensten',
//         link: '#onze-diensten',
//         color: 'purple',
//       },
//     },
//     {
//       id: 'cases',
//       button: {
//         label: 'Onze cases',
//         link: '#cases',
//         color: 'transparent',
//       },
//     },
//   ],
//   id: 'hero',
//   image: {
//     alt: '',
//     src: '/images/home/home_hero_illustration.svg',
//   },
//   title: 'Versterk je merk met de juiste Vibe.',
// }

const servicesBlock: ServicesBlock = {
  title: 'Onze diensten',
  services: [
    {
      id: 'business',
      title: 'Business website',
      image: {
        src: '/images/services/branding.svg',
        alt: 'Business website',
      },
      button: {
        color: 'purple',
        label: 'Meer info',
        link: '/payload/websites',
      },
    },
    {
      id: 'webshop',
      title: 'Webshop',
      image: {
        src: '/images/services/branding.svg',
        alt: 'Webshop',
      },
      button: {
        color: 'purple',
        label: 'Meer info',
        link: '/payload/webshop',
      },
    },
    {
      id: 'branding',
      title: 'Branding',
      image: {
        src: '/images/services/branding.svg',
        alt: 'Branding',
      },
      button: {
        color: 'purple',
        label: 'Meer info',
        link: '/payload/websites',
      },
    },
  ],
}

const casesBlock: CasesBlock = {
  id: 'cases',
  title: 'Cases',
  cases: [
    {
      category: 'Blog',
      title: 'Explauradise',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      id: 'explauradise',
      image: {
        src: '/images/cases/explauradise.jpg',
        alt: 'Exaplauradise',
      },
      slug: 'explauradise',
    },
    {
      category: 'Business',
      title: 'VDR Chemtech',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      id: 'vdr-checmtech',
      image: {
        src: '/images/cases/explauradise.jpg',
        alt: 'VDR Chemtech',
      },
      slug: 'vdr-chemtech',
    },
  ],
}

const ctaBlock: CtaBlock = {
  id: 'cta',
  title: 'Samenwerken voor jouw volgend project?',
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita ',
  button: {
    color: 'transparentWhite',
    label: 'Vraag een gesprek aan',
    link: '/contact',
  },
}

const { data } = useFetch('/api/pages/home')

const heroBlock = computed<HeroBlock | null>(() => {
  const block = data.value?.content?.find(block => block.blockType === 'hero')

  if (!block) {
    return null
  }

  return HeroBlockTransformer.fromDto(block)
})
</script>

<template>
  <main>
    <BlockHero v-if="heroBlock" :block="heroBlock" />
    <BlockServices :block="servicesBlock" />
    <BlockCases :block="casesBlock" />
    <BlockCta :block="ctaBlock" />
  </main>
</template>
