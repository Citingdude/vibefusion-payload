import type { Blog } from '@repo/payload'
import { z } from 'zod'
import { useOrpc } from '~/composables/useOrpc'

const BlogDetailQuerySchema = z.object({
  slug: z.string(),
})

export default defineEventHandler<Promise<Blog>>(async (event) => {
  const result = await getValidatedQuery(event, BlogDetailQuerySchema.safeParse)

  if (!result.success) {
    throw result.error.issues
  }

  const orpc = useOrpc()

  const blog = await orpc.blog.find({
    slug: result.data.slug,
  })

  return blog
})
