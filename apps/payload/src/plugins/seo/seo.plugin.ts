import { seoPlugin } from '@payloadcms/plugin-seo'

export default () => seoPlugin({
  collections: [
    'pages',
    'cases',
  ],
  globals: [
    'home',
  ],
  uploadsCollection: 'media',
  tabbedUI: true,
  generateTitle: ({ doc }) => `${doc.title} | VibeFusion`,
})
