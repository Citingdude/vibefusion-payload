import type Category from '../components/category.type'
import type Image from '../components/image.type'

export default interface PageData {
  data: [{
    id: number
    attributes: {
      Title: string
      Body: string
      slug: string
      summary: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      Image: Image
      category: Category
    }
  }]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }

}
