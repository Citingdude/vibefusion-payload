import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@blocks': fileURLToPath(new URL('./app/features/block/components', import.meta.url)),
    '@payload-types': fileURLToPath(new URL('../../packages/types/src/payload-types.d.ts', import.meta.url)),
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
      apiBase: '',
      baseUrl: '',
      payloadApiBaseUrl: '',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  imports: {
    dirs: [
      'services',
    ],
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
