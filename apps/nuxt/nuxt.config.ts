import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@blocks': fileURLToPath(new URL('./app/features/block/components', import.meta.url)),
    '@payload': fileURLToPath(new URL('./node_modules/@repo/payload/src', import.meta.url)),
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
      cmsBaseUrl: '',
    },
  },
  modules: [
    '@vueuse/nuxt',
    'reka-ui/nuxt',
  ],
  imports: {
    dirs: [
      'services',
    ],
  },
  experimental: {
    typedPages: true,
    payloadExtraction: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
