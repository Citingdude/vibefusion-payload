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

<style>
.v-enter-from,
.v-leave-to {
 @apply -translate-y-8 opacity-0;
}

.v-enter-active,
.v-leave-active {
  @apply transition duration-300 ease-in-out;
}

@keyframes fade-in-from-top {
  from {
    opacity: 0;
    transform: translateY(-1rem);
    scale: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
