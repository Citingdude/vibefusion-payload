import type { ServiceCardDto } from '~/features/service/types/serviceCard.type'

export interface ServiceCardArrayItemDto {
  serviceCard: ServiceCardDto
  id?: string | null
}
