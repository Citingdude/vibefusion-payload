import type Image from '../components/image.type'

export default interface Blog {
  id: number
  attributes: {
    title: string
    slug: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: Image
  }

}
