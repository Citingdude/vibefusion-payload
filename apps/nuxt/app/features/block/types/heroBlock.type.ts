import type { Button } from '~/features/button/models/button.model'
import type { Image } from '~/features/image/models/image.model'

export interface HeroBlock {
  id: string
  title: string
  body: string | null
  image: Image | null
  buttons: Button[]
  blockType: 'hero'
}
