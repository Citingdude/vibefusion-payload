<script setup lang="ts">
useSeoMeta({
  title: 'Webshop - VibeFusion',
  description: 'Verkoop eenvoudig online met een betaalbare webshop',
  ogTitle: 'Webshop - VibeFusion',
  ogDescription: 'Verkoop eenvoudig online met een betaalbare webshop',
  twitterTitle: 'Webshop - VibeFusion',
  twitterDescription: 'Verkoop eenvoudig online met een betaalbare webshop',
  twitterCard: 'summary',
})
</script>

<template>
  <main>
    <Head>
      <Title>Webshop - VibeFusion</Title>
      <Meta
        name="description"
        content="Verkoop eenvoudig online met een betaalbare webshop"
      />
    </Head>

    <!-- Hero -->
    <section class="py-20 md:py-40">
      <div class="container grid gap-16 lg:grid-cols-2">
        <!-- Content -->
        <div>
          <h1 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
            Verkoop eenvoudig online met een betaalbare webshop
          </h1>

          <p class="mb-12 text-lg">
            Wil je ook meeprofiteren van het steeds groter wordend succes van de
            E-commerce? Wij helpen je graag verder in het bouwen van een
            betaalbare en conversiegerichte webshop die functioneert op alle
            schermen.
          </p>

          <!-- Button -->
          <div class="flex">
            <AppButton type="internal" color="purple" link="contact" size="medium">
              Start jouw webshop
            </AppButton>
          </div>
        </div>

        <!-- Illustration -->
        <div>
          <img src="~/assets/images/webshop-illustration.svg" alt="">
        </div>
      </div>
    </section>

    <!-- Affordable -->
    <section class="bg-light-alt py-20 md:py-40">
      <div class="container mx-auto grid items-center gap-16 lg:grid-cols-2">
        <!-- Content -->
        <div>
          <LayoutHeading title="Focus op betaalbaar" class="mb-8 items-start" />

          <!-- Body -->
          <p class="text-lg">
            Om onze webshops betaalbaar te houden voor kleinere ondernemingen
            hebben we er voor gekozen om deels te werken met voorgebouwde
            technische elementen.
            <br>
            <br>
            Dit zijn elementen zoals productfiltering, zoekfuncties,
            productiegalerijen, accountpagina's en menusystemen.
            <br>
            <br>
            Alle visuele elementen blijven zelf ontworpen door ons zodat jouw
            webshop uniek is en bij je merk past!
          </p>
        </div>

        <!-- Image -->
        <div>
          <img
            class="max-w-full rounded-br-4xl rounded-tl-4xl shadow-2xl"
            src="~/assets/images/betaalbaar.jpg"
            alt="Betaalbare webshop"
          >
        </div>
      </div>
    </section>

    <!-- Easy -->
    <section class="bg-light-main py-20 md:py-40">
      <div class="container grid items-center gap-16 lg:grid-cols-2">
        <!-- Image -->
        <div class="order-2 sm:order-1">
          <img
            class="max-w-full rounded-br-4xl rounded-tl-4xl shadow-2xl"
            src="~/assets/images/eenvoudig.jpeg"
            alt="Eenvoudig beheer"
          >
        </div>

        <!-- Content -->
        <div class="order-1 sm:order-2">
          <LayoutHeading
            title="Gebruiksvriendelijke beheer"
            class="mb-8 items-start"
          />

          <!-- Body -->
          <p class="text-lg">
            We bouwen al onze webshops op in WordPress. Dit heeft als voordeel
            dat het gebruiksvriendelijke Content Management Systeem van
            WordPress ook voor je webshop ter beschikking staat.
            <br><br>
            Zo beheer je zelf eenvoudig je producten, bestellingen,
            kortingsbonnen, voorraad en nog veel meer.
          </p>
        </div>
      </div>
    </section>

    <!-- Cta -->
    <section class="bg-dark-300 py-20 md:py-40">
      <div class="container mx-auto flex flex-col items-center">
        <LayoutHeading
          class="mb-12 text-center text-light-main"
          title="Jouw webshop starten?"
          text-color="light"
        />

        <AppButton type="internal" link="/contact" color="transparent-white" size="medium">
          Vraag een vrijblijvend gesprek aan
        </AppButton>
      </div>
    </section>

    <!-- Integrations -->
    <section class="bg-light-alt py-20 md:py-40">
      <div class="container grid items-center gap-16 lg:grid-cols-2">
        <!-- Content -->
        <div>
          <LayoutHeading
            title="Integraties en uitbreidingen"
            class="mb-8 items-start"
          />

          <!-- Body -->
          <p class="text-lg">
            Om onze webshops betaalbaar te houden voor kleinere ondernemingen
            hebben we er voor gekozen om deels te werken met voorgebouwde
            technische elementen.
            <br><br>
            Dit zijn elementen zoals productfiltering, zoekfuncties,
            productiegalerijen, accountpagina's en menusystemen.
            <br><br>
            Alle visuele elementen blijven zelf ontworpen door ons zodat jouw
            webshop uniek is en bij je merk past!
          </p>
        </div>

        <!-- Image -->
        <div>
          <img
            class="max-w-full rounded-br-4xl rounded-tl-4xl shadow-2xl"
            src="~/assets/images/integraties.jpeg"
            alt="Betaalbare webshop"
          >
        </div>
      </div>
    </section>

    <!-- Responsive -->
    <section class="bg-light-main py-20 md:py-40">
      <div class="container grid items-center gap-16 lg:grid-cols-2">
        <!-- Image -->
        <div class="order-2 sm:order-1">
          <img
            class="max-w-full rounded-br-4xl rounded-tl-4xl shadow-2xl"
            src="~/assets/images/eenvoudig.jpeg"
            alt="Eenvoudig beheer"
          >
        </div>

        <!-- Content -->
        <div class="order-1 sm:order-2">
          <LayoutHeading title="Mobielvriendelijk" class="mb-8 items-start" />

          <!-- Body -->
          <p class="text-lg">
            Steeds meer mensen surfen en kopen via de smartphone of tablet. Het
            is daarom enorm belangrijk dat jouw webshop ook op smartphones en
            tablets volledig functioneert én de bezoeker een goede
            gebruikservaring levert.
            <br><br>
            Al onze webshops zijn volledig responsief opgebouwd zodat jouw
            toekomstige klanten ook via de smartphone of tablet moeiteloos hun
            aankopen kunnen doen.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
