<script setup lang="ts">
import BlockHero from '~/features/block/components/BlockHero.vue'
import BlockServices from '~/features/block/components/BlockServices.vue'
import type { HeroBlock } from '~/features/block/models/heroBlock.model'
import type { ServicesBlock } from '~/features/block/models/servicesBlock.model'

const heroBlock: HeroBlock = {
  blockName: 'hero',
  blockType: 'hero',
  body: '',
  buttons: [
    {
      id: 'services',
      button: {
        label: 'Onze diensten',
        link: '#diensten',
        color: 'purple',
      },
    },
    {
      id: 'cases',
      button: {
        label: 'Onze cases',
        link: '#cases',
        color: 'transparent',
      },
    },
  ],
  id: 'hero',
  image: {
    alt: '',
    src: '/images/home/home_hero_illustration.svg',
  },
  title: 'Versterk je merk met de juiste Vibe.',
}

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
</script>

<template>
  <main>
    <BlockHero :block="heroBlock" />
    <BlockServices :block="servicesBlock" />
  </main>
</template>
