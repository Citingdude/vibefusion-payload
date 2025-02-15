import type { ServiceCard } from '~/features/service/types/serviceCard.type'
import type { ServiceCardArrayItemDto } from '~/features/service/types/serviceCardArrayItem.type'

export interface ServiceCardsBlockDto {
  title?: string | null
  serviceCards?: ServiceCardArrayItemDto[]
  id?: string | null
  blockName?: string | null
  blockType: 'serviceCardsBlock'
}

export interface ServiceCardsBlock {
  title: string | null
  serviceCards: ServiceCard[]
  blockType: 'serviceCardsBlock'
}
