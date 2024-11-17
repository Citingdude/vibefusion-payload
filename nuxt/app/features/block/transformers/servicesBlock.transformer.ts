import type { ServicesBlock, ServicesBlockDto } from '../models/servicesBlock.model'
import { ServiceCardTransformer } from '~/features/service/transformers/serviceCard.transformer'

export class ServicesBlockTransformer {
  static fromDto(dto: ServicesBlockDto): ServicesBlock {
    return {
      title: dto.title || undefined,
      services: dto.serviceCards.map(ServiceCardTransformer.fromDto),
    }
  }
}
