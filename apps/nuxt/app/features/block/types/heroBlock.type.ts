import type { Button } from '~/features/button/types/button.type'
import type { Image } from '~/features/image/types/image.type'

export interface HeroBlock {
  id: string
  title: string
  body: string | null
  image: Image | null
  buttons: Button[]
  blockType: 'hero'
}
