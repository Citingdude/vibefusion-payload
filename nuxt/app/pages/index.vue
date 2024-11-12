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
            id: '',
            button: {
              label: 'Test',
              link: 'test',
            },
          },
        ],
        id: '',
        image: {
          alt: '',
          src: '',
        },
        title: 'Titel',
      }"
    />
  </main>
</template>
