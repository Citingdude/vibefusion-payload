<script setup lang="ts">
const dropdownRef = ref<null | HTMLElement>(null)

const { dropdownIsActive, toggleDropdown } = useDropdown(dropdownRef)
</script>

<template>
  <div
    ref="dropdownRef"
    class="relative cursor-pointer"
    @click="toggleDropdown()"
  >
    <p>Diensten</p>

    <Transition>
      <div
        v-if="dropdownIsActive"
        class="absolute top-full z-10 flex w-max flex-col space-y-3 rounded-xl bg-light-alt p-3"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
