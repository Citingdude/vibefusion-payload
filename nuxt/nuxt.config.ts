// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      baseUrl: process.env.BASE_URL,
      payloadApiBaseUrl: '',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  imports: {
    dirs: [
      'services',
    ],
  },
  image: {
    strapi: {
      baseURL: 'https://strapi.vibefusion.be',
    },
  },
  experimental: {
    typedPages: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  routeRules: {
    '/': {
      swr: true,
    },
    '/**': {
      swr: true,
    },
  },
})
