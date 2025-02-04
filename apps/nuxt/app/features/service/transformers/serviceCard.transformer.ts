import type { ServiceCard, ServiceCardDto } from '../models/serviceCard.model'
import { ButtonTransformer } from '~/features/button/button.transformer'
import { ImageTransformer } from '~/features/image/image.transformer'

export class ServiceCardTransformer {
  static fromDto(dto: ServiceCardDto): ServiceCard {
    return {
      id: dto.id,
      title: dto.serviceCard.title,
      button: ButtonTransformer.fromDto(dto.serviceCard.button),
      image: ImageTransformer.fromDto(dto.serviceCard.image),
    }
  }
}
