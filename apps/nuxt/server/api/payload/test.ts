import { config } from '@repo/payload'
import { getPayload } from 'payload'

export default defineEventHandler(async () => {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const page = pages.docs[0]

  if (!page) {
    return null
  }

  return page
})
