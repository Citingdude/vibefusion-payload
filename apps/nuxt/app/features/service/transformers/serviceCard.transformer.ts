import type { ServiceCard as ServiceCardDto } from '@payload-types'
import type { ServiceCard } from '~/features/service/types/serviceCard.type'
import { ButtonTransformer } from '~/features/button/transformers/button.transformer'
import { IconTransformer } from '~/features/icon/transformers/icon.transformer'

export class ServiceCardTransformer {
  static fromDto(dto: ServiceCardDto): ServiceCard {
    const icon = dto.icon && typeof dto.icon !== 'number'
      ? dto.icon
      : null

    return {
      button: ButtonTransformer.fromDto(dto.button),
      icon: icon ? IconTransformer.fromDto(icon) : null,
      title: dto.title || null,
    }
  }
}
