import type { Image } from '~/features/image/types/image.type'

export interface CaseCard {
  id: string
  title: string
  category: string
  description: string
  slug: string
  image: Image
}
