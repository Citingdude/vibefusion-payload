import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { globals } from '@payload/globals/global'
// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { buildConfig } from 'payload'
import sharp from 'sharp'
import { collections } from './collections'
import { UserCollection } from './collections/user/user.collection'
import { plugins } from './plugins/plugins'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: UserCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals,
  collections,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve('./src', 'payload-types.ts'),
  },
  cors: '*',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins,
  serverURL: 'http://localhost:4000',
})
