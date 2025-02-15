import type { Block, BlockDto } from '~/features/block/types/block.type'
import type { Image, ImageDto } from '~/features/image/types/image.type'

export interface PageDto {
  id: number
  slug: string
  title: string
  content: BlockDto[]
  meta: {
    title: string | null
    description: string | null
    image: ImageDto | null
  }
  updatedAt: string
  createdAt: string
}

export interface Page {
  slug: string
  title: string
  content: Block[]
  meta: {
    title: string | null
    description: string | null
    image: Image
  }
}
