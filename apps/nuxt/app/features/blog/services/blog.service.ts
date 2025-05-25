export const blogService = {
  async getBySlug(slug: string) {
    const orpc = useOrpc()

    const blog = await orpc.blog.find({ slug })

    return blog
  },
}
