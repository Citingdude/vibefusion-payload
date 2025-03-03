import type { Home } from '@repo/payload'
import getPayloadUtil from '~~/server/utils/payload/getPayload.util'

export default defineEventHandler(async (): Promise<Home> => {
  const payload = await getPayloadUtil()

  return await payload.findGlobal({
    slug: 'home',
    depth: 2,
  })
})
