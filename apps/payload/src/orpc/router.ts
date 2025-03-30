import { os } from '@orpc/server'

import { getPayload } from 'payload'
import config from '../payload.config'

export const listPage = os
  .handler(async () => {
    const payload = await getPayload({ config })

    const pages = payload.find({
      collection: 'pages',
    })

    return pages
  })

export const orpcRouter = os.router({
  page: {
    list: listPage,
  },
})
