<script setup lang="ts">
const props = defineProps<{
  id: number
  icon?: 'webdesign' | 'webshop' | 'branding' | null
  title: string
  ctaTitle: string
  ctaUrl: string
  color: string
}>()

const getBorders = computed(() => {
  switch (props.id) {
    case 1:
      return 'rounded-tl-3xl rounded-br-3xl'

    case 2:
      return 'rounded-tr-3xl rounded-bl-3xl'

    case 3:
      return 'rounded-tr-3xl rounded-bl-3xl'

    case 4:
      return 'rounded-tl-3xl rounded-br-3xl'
  }
})

const getColor = computed(() => {
  switch (props.color) {
    case 'light':
      return 'bg-light-main'

    case 'dark':
      return 'bg-dark-200 text-light-main'
  }
})

const iconComponent = computed(() => {
  switch (props.icon) {
    case 'branding':
      return resolveComponent('IconsBranding')

    case 'webdesign':
      return resolveComponent('IconsWebdesign')

    case 'webshop':
      return resolveComponent('IconsWebshop')
  }
})
</script>

<template>
  <div
    class="bg-dark anim-fade-in-up col-span-2 flex flex-col items-center justify-center p-12 md:col-span-1"
    :class="[getBorders, getColor]"
  >
    <!-- Icon -->
    <component :is="iconComponent" v-if="icon" />

    <!-- Title -->
    <h3 class="my-8 font-display text-3xl font-bold" :class="`${getColor}`">
      {{ props.title }}
    </h3>

    <!-- Button -->
    <AppButton type="internal" color="transparent" :to="props.ctaUrl" size="medium">
      {{ props.ctaTitle }}
    </AppButton>
  </div>
</template>
