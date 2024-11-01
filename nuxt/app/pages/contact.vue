<script setup lang="ts">
useSeoMeta({
  title: 'Contact - VibeFusion',
  description: 'Contacteer ons voor een afspraak',
  ogTitle: 'Contact - VibeFusion',
  ogDescription: 'Contacteer ons voor een afspraak',
  twitterTitle: 'Contact - VibeFusion',
  twitterDescription: 'Contacteer ons voor een afspraak',
})
</script>

<template>
  <main>
    <section class="py-20 lg:py-40">
      <div class="container">
        <h1
          class="mb-16 font-display text-5xl font-bold md:text-6xl lg:text-7xl"
        >
          Contacteer ons
        </h1>

        <!-- Content -->
        <div class="grid lg:grid-cols-2">
          <div
            class="w-max rounded-br-4xl rounded-tl-4xl bg-dark-200 p-12 sm:p-16"
          >
            <h2
              class="mb-8 font-display text-3xl font-normal text-light-main lg:text-4xl"
            >
              Contactgegevens
            </h2>

            <div class="space-y-8 text-light-alt">
              <div class="flex items-center space-x-4">
                <IconsArrow />

                <p>
                  Meesstraat 7, <br>
                  3950 Kaulille
                </p>
              </div>
              <div class="flex items-center space-x-4">
                <IconsArrow />

                <p>info@vibefusion.be</p>
              </div>
              <div class="flex items-center space-x-4">
                <IconsArrow />

                <p>0470 59 88 37</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
