<script setup lang="ts">
import BlockHero from '~/features/block/components/BlockHero.vue'
</script>

<template>
  <main>
    <BlockHero
      :block="{
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
        id: '',
        image: {
          alt: '',
          src: '',
        },
        title: 'Versterk je merk met de juiste Vibe.',
      }"
    />
  </main>
</template>
