<script setup lang="ts">
import { computed } from 'vue'

const getYear = computed(() => {
  const date = new Date()
  const year = date.getFullYear()
  return year
})
</script>

<template>
  <footer class="bg-dark-400 pb-4 pt-12">
    <div class="container mb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h3 class="mb-4 font-display text-2xl text-light-main">
          Navigatie
        </h3>
        <div class="flex flex-col space-y-1">
          <a href="#" class="link-hover text-light-main">Home</a>
          <a href="#" class="link-hover text-light-main">Cases</a>
          <a href="#" class="link-hover text-light-main">Blog</a>
          <a href="#" class="link-hover text-light-main">Contact</a>
        </div>
      </div>

      <div>
        <h3 class="mb-4 font-display text-2xl text-light-main">
          Diensten
        </h3>
        <div class="flex flex-col space-y-1">
          <a href="#" class="link-hover text-light-main">Website laten maken</a>
          <a href="#" class="link-hover text-light-main">Webshop laten maken</a>
          <a href="#" class="link-hover text-light-main">Branding</a>
        </div>
      </div>

      <div>
        <h3 class="mb-4 font-display text-2xl text-light-main">
          Contactgegevens
        </h3>
        <div class="flex flex-col space-y-1">
          <p class="text-light-main">
            Meesstraat 7
          </p>
          <p class="text-light-main">
            3950 Bocholt
          </p>
          <a href="#" class="link-hover text-light-main">0470 59 88 37</a>
          <a href="#" class="link-hover text-light-main">info@vibefusion.be</a>
        </div>
      </div>

      <div>
        <a aria-label="Home" class="flex max-w-xs" href="/">
          <AppLogo color="white" />
        </a>
      </div>
    </div>

    <div
      class="container flex flex-col items-center border-t-2 border-dark-100 pt-4 md:flex-row md:justify-between"
    >
      <p class="mb-4 text-light-alt md:mb-0">
        Copyright © {{ getYear }} VibeFusion
      </p>

      <div class="flex flex-row space-x-12 text-light-alt">
        <a class="link-hover" href="/cookiebeleid">Cookiebeleid</a>
        <a class="link-hover" href="/privacyverklaring">Privacyverklaring</a>
      </div>
    </div>
  </footer>
</template>
