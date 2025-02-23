import { seoPlugin } from '@payloadcms/plugin-seo'

export default () => seoPlugin({
  collections: [
    'pages',
    'cases',
  ],
  uploadsCollection: 'media',
  generateTitle: ({ doc }) => `${doc.title} | VibeFusion`,
})
