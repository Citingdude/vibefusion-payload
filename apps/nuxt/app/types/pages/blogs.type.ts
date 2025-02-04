import type Blog from '../blog/blog.type'

export default interface PageData {
  data: Blog[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
