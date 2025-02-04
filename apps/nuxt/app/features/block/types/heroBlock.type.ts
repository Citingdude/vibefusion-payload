import type { Button } from '~/types/components/button.type'

export interface HeroBlock {
  id: string
  title: string
  body: string | null
  image: {
    alt: string
    src: string
  } | null
  blockName: string | null
  buttons: Button[]
  blockType: 'hero'
}
