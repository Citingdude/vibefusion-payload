<template>
  <nav
    class="col-span-6 hidden items-center justify-center space-x-10
    font-display text-xl font-medium
    lg:flex
    [&_>_.router-link-active]:after:absolute
    [&_>_.router-link-active]:after:right-1/2
    [&_>_.router-link-active]:after:top-[80%]
    [&_>_.router-link-active]:after:translate-x-1/2
    [&_>_.router-link-active]:after:-rotate-90
    [&_>_.router-link-active]:after:content-[url('/svg/arrow.svg')] [&_a]:relative"
  >
    <NuxtLink to="/">
      Home
    </NuxtLink>

    <AppNavDropdown>
      <AppNavigationLink
        title="Website laten maken"
        icon="webdesign"
        to="/webdesign"
      />
      <AppNavigationLink
        title="Webshop laten maken"
        icon="webshop"
        to="/webshop"
      />
      <AppNavigationLink
        title="Branding"
        icon="branding"
        to="/branding"
      />
    </AppNavDropdown>

    <NuxtLink to="/cases">
      Cases
    </NuxtLink>

    <NuxtLink to="/blog">
      Blog
    </NuxtLink>
  </nav>
</template>

<style scoped>
.router-link-active:after {
  animation-name: fade-in-from-top;
  animation-duration: 250ms;
  animation-timing-function: ease-out;
}
</style>
