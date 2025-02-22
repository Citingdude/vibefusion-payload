import type { ServiceCardsBlock as ServiceCardsBlockDto } from '@payload-types'
import type { ServiceCardsBlock } from '~/features/block/types/serviceCardsBlock.type'
import { ServiceCardTransformer } from '~/features/service/transformers/serviceCard.transformer'

export class ServiceCardsBlockTransformer {
  static fromDto(dto: ServiceCardsBlockDto): ServiceCardsBlock {
    return {
      blockType: 'serviceCardsBlock',
      title: dto.title || null,
      serviceCards: dto.serviceCards?.map((item) => {
        return ServiceCardTransformer.fromDto(item.serviceCard)
      }) || [],
    }
  }
}
