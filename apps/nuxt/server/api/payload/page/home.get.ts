import type { Page } from '@repo/payload'
import getPayloadUtil from '~~/server/utils/payload/getPayload.util'

export default defineEventHandler(async (): Promise<Page> => {
  try {
    const payload = await getPayloadUtil()

    const { docs: pages } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
      limit: 1,
    })

    if (!pages[0]) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return pages[0]
  }
  catch (error) {
    console.error('Error fetching page:', error)

    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
    })
  }
})
