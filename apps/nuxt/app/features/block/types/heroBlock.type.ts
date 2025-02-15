import type { Button } from '~/features/button/types/button.type'
import type { ButtonArrayItemDto } from '~/features/button/types/buttonArrayItem.type'
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
  id: string | null
  title: string
  body: string | null
  image: Image | null
  buttons: Button[]
  blockType: 'hero'
}
