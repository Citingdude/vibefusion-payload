import type { Image } from '~/features/image/types/image.type'

interface CaseCard {
  id: string
  title: string
  category: string
  description: string
  slug: string
  image: Image
}

export interface CasesBlock {
  id?: string
  title?: string
  cases: CaseCard[]
  blockType: 'casesBlock'
}
