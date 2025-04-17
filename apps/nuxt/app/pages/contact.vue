<script setup lang="ts">
import type { SelectOption } from '~/components/app/select/AppSelect.vue'

const value = ref<string>()

const options: SelectOption[] = [
  {
    label: 'Option',
    value: 'value',
  },
  {
    label: 'Option 2',
    value: 'value2',
  },
]
</script>

<template>
  <main>
    <section class="py-48">
      <div class="container">
        {{ value }}
        <AppSelect
          v-model="value"
          label="Customize items"
          placeholder="Select item"
          :options="options"
        />
      </div>
    </section>
  </main>
</template>
