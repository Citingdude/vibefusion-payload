import { os } from '@orpc/server'

import { blogRouter } from '@payload/orpc/routers/blog/blog.router'
import { pageRouter } from './routers/page/page.router'

export const orpcRouter = os.router({
  page: pageRouter,
  blog: blogRouter,
})
