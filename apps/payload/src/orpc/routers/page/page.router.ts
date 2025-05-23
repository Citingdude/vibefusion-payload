import { ORPCError, os } from '@orpc/server'

import config from '@payload/payload.config'
import { getPayload } from 'payload'
import { z } from 'zod'

export const listPage = os
  .handler(async () => {
    const payload = await getPayload({ config })

    const pages = await payload.find({
      collection: 'pages',
    })

    return pages
  })

export const homePage = os
  .handler(async () => {
    const payload = await getPayload({ config })

    const pages = await payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'home',
        },
      },
    })

    const homePage = pages.docs[0]

    if (!homePage) {
      throw new ORPCError('Homepage not found')
    }

    return homePage
  })

export const findPage = os
  .input(z.object({
    url: z.string(),
  }))
  .handler(async ({ input }) => {
    const payload = await getPayload({ config })

    const pages = await payload.find({
      collection: 'pages',
      where: {
        url: {
          equals: input.url,
        },
      },
    })

    const page = pages.docs[0]

    if (!page) {
      throw new ORPCError('Page not found')
    }

    return page
  })

export const pageRouter = os.router({
  list: listPage,
  home: homePage,
  find: findPage,
})
