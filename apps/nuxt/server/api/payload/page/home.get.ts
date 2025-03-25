import type { Page } from '@repo/payload'
import getPayloadUtil from '~~/server/utils/payload/getPayload.util'

export default defineEventHandler(async (): Promise<Page> => {
  const payload = await getPayloadUtil()

  const pages = await payload.find({
    collection: 'pages',
    depth: 2,
    where: {
      pageType: {
        equals: 'home',
      },
    },
  })

  const homePage = pages.docs[0]

  if (!homePage) {
    throw createError('Homepage not found')
  }

  return homePage
})
