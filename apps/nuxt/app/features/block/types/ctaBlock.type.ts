import type { Button } from '~/features/button/types/button.type'

export interface CtaBlock {
  title: string
  body: string | null
  button: Button
  blockType: 'ctaBlock'
}
