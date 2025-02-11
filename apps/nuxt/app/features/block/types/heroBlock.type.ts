import type { ButtonArrayItem, ButtonArrayItemDto } from '~/features/button/types/buttonArrayItem.type'
import type { Image, ImageDto } from '~/features/image/types/image.type'

export interface HeroBlockDto {
  id: string
  title: string
  body: string | null
  image: ImageDto | null
  buttons: ButtonArrayItemDto[]
  blockType: 'hero'
}

export interface HeroBlock {
  id: string
  title: string
  body: string | null
  image: Image | null
  buttons: ButtonArrayItem[]
  blockType: 'hero'
}
