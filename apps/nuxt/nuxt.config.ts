import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@payload-types': fileURLToPath(new URL('../payload/src/payload-types', import.meta.url)),
  },
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
})
