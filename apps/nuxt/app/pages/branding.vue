<script setup lang=ts></script>

<template>
  <main>
    <Head>
      <Title>Branding - VibeFusion</Title>
      <Meta name="description" content="Overtuig je klanten met een sterke branding" />
    </Head>

    <!-- Hero -->
    <section class="py-20 md:py-40">
      <div class="container grid gap-16 lg:grid-cols-2">
        <!-- Content -->
        <div>
          <h1 class="mb-4 font-display text-4xl font-bold lg:text-5xl">
            Overtuig je klanten met een sterke branding
          </h1>

          <p class="mb-12 text-lg">
            Een goede branding is meer dan alleen een logo. Het bestaat uit
            verschillende elementen die elkaar versterken. Samen hebben ze het
            doel om jouw merk te onderscheiden van de concurrentie en je bedrijf
            te positioneren voor de juiste doelgroep.
            <br><br>
            Wij helpen je verder met het ontwerp van een krachtige branding die
            jouw bedrijf naar een hoger niveau tilt.
          </p>

          <!-- Button -->
          <div class="flex">
            <AppButton type="hash" color="purple" size="medium" hashlink="branding-package">
              Ontdek het branding pakket
            </AppButton>
          </div>
        </div>

        <!-- Illustration -->
        <div>
          <img src="~/assets/images/branding-illustration.svg" alt="">
        </div>
      </div>
    </section>

    <!-- Branding package -->
    <section id="branding-package" class="bg-light-alt py-20 md:py-40">
      <div class="container">
        <LayoutHeading
          class="mb-16 text-center"
          title="Een compleet branding pakket"
        />

        <!-- Content -->
        <div class="grid gap-24">
          <!-- Logo -->
          <div class="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <LayoutHeading class="mb-8 items-start" title="Logo" size="h3" />

              <p class="text-lg">
                Het logo is één van de belangrijkste elementen van een merk. Het
                moet onderscheidend, herkenbaar en duidelijk zijn. De beste
                logo's lijken vaak zeer eenvoudig, maar zijn altijd zeer
                doordacht door middel van veel research en brainstormsessies.
                <br><br>
                We ontwerpen een logo voor jouw merk dat je onderscheidt van de
                concurrentie, de juiste vibe geeft bij je klanten en duidelijk
                blijft in kleine en grote formaten.
              </p>
            </div>

            <div>
              <img
                class="rounded-bl-4xl rounded-tr-4xl"
                src="~/assets/images/branding-logo.jpeg"
                alt="Logo design"
              >
            </div>
          </div>

          <!-- Kleurenpalet -->
          <div class="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <img
                class="rounded-br-4xl rounded-tl-4xl"
                src="~/assets/images/kleurenpalet.jpeg"
                alt="Kleurenpalet"
              >
            </div>

            <div>
              <LayoutHeading
                class="mb-8 items-start"
                title="Kleurenpalet"
                size="h3"
              />

              <p class="text-lg">
                Elke kleur brengt een bepaalde emotie naar boven. Zo straalt
                blauw vertrouwen uit en straalt rood passie uit. De juiste
                kleuren kiezen die passen bij je merk is geen eenvoudige
                opdracht. Zo moeten alle kleuren bij elkaar passen, het juiste
                gevoel uitstralen en ook nog eens genoeg contrast creëren.
                <br><br>
                Wij onderzoeken grondig welke kleuren bij jouw merk passen en
                stellen een functioneel kleurenpalet samen dat de juiste vibe
                uitstraalt.
              </p>
            </div>
          </div>

          <!-- Logo -->
          <div class="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <LayoutHeading
                class="mb-8 items-start"
                title="Typografie"
                size="h3"
              />

              <p class="text-lg">
                Een vaak onderschat element van een merk is de typografie. Het
                is één van de elementen die je merk kan maken of breken. Een
                serieus business merk dat professionaliteit wilt uitstralen
                kiest bijvoorbeeld beter niet voor een organisch en fun
                lettertype.
                <br><br>
                Ook hier starten we bij het gevoel dat je als merk wilt
                overdragen aan je klanten. Daarna researchen we de concurrentie
                en verschillende potentiële lettertypes die over de juiste stijl
                beschikken.
              </p>
            </div>

            <div>
              <img
                class="rounded-bl-4xl rounded-tr-4xl"
                src="~/assets/images/typografie.jpeg"
                alt="Typografie"
              >
            </div>
          </div>

          <!-- Steunelementen -->
          <div class="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <img
                class="rounded-br-4xl rounded-tl-4xl"
                src="~/assets/images/steunelementen.jpeg"
                alt="Steunelementen"
              >
            </div>

            <div>
              <LayoutHeading
                class="mb-8 items-start"
                title="Steunelementen"
                size="h3"
              />

              <p class="text-lg">
                Om je merk echt tot leven te brengen ontwerpen we
                steunelementen. Dit zijn bijvoorbeeld patronen, icoontjes en
                vormen.
                <br><br>
                We zorgen er altijd voor dat deze steunelementen bij je
                volledige branding passen. Met de juiste steunelementen zal je
                jouw merk nog meer onderscheiden van de concurrentie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="bg-dark-300 py-20 md:py-40">
      <div class="container flex flex-col items-center">
        <LayoutHeading
          class="mb-24 text-center text-light-main"
          title="Voordelen van een sterke branding"
          text-color="light"
        />

        <!-- Benefits -->
        <div class="grid max-w-6xl gap-x-32 gap-y-8 lg:grid-cols-2">
          <BenefitItem title="Vergroot de merkherkenbaarheid" />
          <BenefitItem title="Creëert duidelijkheid" />
          <BenefitItem title="Straalt professionaliteit uit" />
          <BenefitItem title="Onderscheidt je van de concurrentie" />
          <BenefitItem title="Versterkt de verbondenheid met de klant" />
          <BenefitItem
            title="Start jouw branding project"
            type="cta"
            to="/contact"
          />
        </div>
      </div>
    </section>

    <!-- Cta -->
    <section class="py-20 md:py-40">
      <div
        class="container flex flex-col items-center rounded-br-4xl rounded-tl-4xl bg-dark-200 p-16 md:py-32"
      >
        <h2
          class="mb-8 font-display text-3xl font-bold text-light-main sm:text-4xl"
        >
          Klaar voor jouw branding project?
        </h2>

        <AppButton type="internal" link="/" size="medium" color="transparent" class="flex">
          Vraag een vrijblijvend gesprek aan
        </AppButton>
      </div>
    </section>
  </main>
</template>
