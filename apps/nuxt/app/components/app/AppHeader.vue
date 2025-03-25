<script setup lang="ts">
import type { AppNavigationMenuItemProps } from '~/components/app/navigation/menu/AppNavigationMenu.vue'

const route = useRoute()

const mobileMenu = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)

const menuItems = computed<AppNavigationMenuItemProps[]>(() => {
  return [
    {
      type: 'link',
      label: 'Home',
      to: '/',
    },
    {
      type: 'dropdown',
      label: 'Diensten',
      to: '/diensten',
      subItems: [
        {
          type: 'link',
          label: 'Webdesign',
          to: '/webdesign',
        },
      ],
    },
    {
      type: 'link',
      label: 'Cases',
      to: '/cases',
    },
    {
      type: 'link',
      label: 'Blog',
      to: '/blog',
    },
  ]
})

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
  <header class="shadow-2xl shadow-accent-dark/10">
    <div
      class="container relative mx-auto grid grid-cols-12 items-center py-4 lg:gap-12 lg:py-6"
    >
      <div class="col-span-8 w-48 lg:col-span-3">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </div>

      <AppNavigationMenu
        class="lg:col-span-6"
        :items="menuItems"
      />

      <div class="hidden justify-end lg:col-span-3 lg:flex">
        <AppButton type="internal" color="white" size="sm" to="/contact">
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
