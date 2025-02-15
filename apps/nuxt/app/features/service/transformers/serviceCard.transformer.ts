import type { ServiceCard, ServiceCardDto } from '~/features/service/types/serviceCard.type'
import { ButtonTransformer } from '~/features/button/transformers/button.transformer'
import { IconTransformer } from '~/features/icon/transformers/icon.transformer'

export class ServiceCardTransformer {
  static fromDto(dto: ServiceCardDto): ServiceCard {
    return {
      button: ButtonTransformer.fromDto(dto.button),
      icon: dto.icon ? IconTransformer.fromDto(dto.icon) : null,
      title: dto.title || null,
    }
  }
}
