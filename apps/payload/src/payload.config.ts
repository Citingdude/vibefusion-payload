import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { collections } from '@/collections'
import { UserCollection } from '@/collections/user.collection'
// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: UserCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: '*',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: [
        'pages',
        'cases',
      ],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} | VibeFusion`,
    }),
  ],
  serverURL: 'http://localhost:4000',
})
