import type { ServiceCard, ServiceCardDto } from '../models/serviceCard.model'

export class ServiceCardTransformer {
  static fromDto(dto: ServiceCardDto): ServiceCard {
    return {
      id: dto.id,
      title: dto.serviceCard.title,
    }
  }
}
