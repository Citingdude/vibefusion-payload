<script setup lang="ts">
const route = useRoute()

const mobileMenu = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)

function toggle() {
  mobileMenu.value = !mobileMenu.value
}

function close() {
  mobileMenu.value = false
}

watch(() => route.path, () => {
  close()
})
</script>

<template>
  <header class="shadow-2xl">
    <div
      class="container relative mx-auto grid grid-cols-12 items-center py-4 lg:gap-12 lg:py-6"
    >
      <div class="col-span-8 w-48 lg:col-span-3">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </div>

      <AppNavigation />

      <div class="hidden justify-end lg:col-span-3 lg:flex">
        <AppButton type="internal" color="white" size="small" to="/contact">
          Contact
        </AppButton>
      </div>

      <!-- Hamburger -->
      <div
        class="col-span-4 flex items-center justify-end lg:hidden"
        @click="toggle()"
      >
        <AppHamburger />
      </div>

      <AppNavigationMobile
        v-if="mobileMenu"
        ref="mobileMenuRef"
      />
    </div>
  </header>
</template>
