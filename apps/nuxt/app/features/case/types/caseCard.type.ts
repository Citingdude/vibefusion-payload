import type { Image, ImageDto } from '~/features/image/types/image.type'

export interface CaseCardDto {
  id: number
  title: string
  image: ImageDto | null
  description: string
  updatedAt: string
  createdAt: string
  slug: string
}

export interface CaseCard {
  id: number
  title: string
  image: Image | null
  description: string
  slug: string
}
