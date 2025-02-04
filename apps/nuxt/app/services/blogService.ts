import type PageData from '~/types/pages/blog.type'

class BlogService {
  fetchAllBlogs() {
    return useApiFetch<PageData>('blogs', {
      query: {
        populate: '*',
      },
    })
  }
}

export const blogService = new BlogService()
