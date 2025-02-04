<script setup lang="ts">
const props = defineProps<{
  hasPadding?: boolean
}>()
</script>

<template>
  <section
    :class="{
      'py-20 md:py-32': props.hasPadding,
    }"
  >
    <div class="container">
      <slot />
    </div>
  </section>
</template>
