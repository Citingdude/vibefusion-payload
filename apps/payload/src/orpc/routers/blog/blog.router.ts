import { ORPCError, os } from '@orpc/server'

import config from '@payload/payload.config'
import { getPayload } from 'payload'
import { z } from 'zod'

export const findBlog = os
  .input(z.object({
    slug: z.string(),
  }))
  .handler(async ({ input }) => {
    const payload = await getPayload({ config })

    const blogs = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: input.slug,
        },
      },
    })

    const blog = blogs.docs[0]

    if (!blog) {
      throw new ORPCError('Blog not found')
    }

    return blog
  })

export const blogRouter = os.router({
  find: findBlog,
})
