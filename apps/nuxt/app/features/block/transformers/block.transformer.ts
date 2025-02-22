import type { Block, BlockDto } from '~/features/block/types/block.type'
import { CaseCardsBlockTransformer } from '~/features/block/transformers/caseCardsBlock.transformer'
import { CtaBlockTransformer } from '~/features/block/transformers/ctaBlock.transformer'
import { HeroBlockTransformer } from '~/features/block/transformers/heroBlock.transformer'
import { ServiceCardsBlockTransformer } from '~/features/block/transformers/serviceCardsBlock.transformer'

export class BlockTransformer {
  static fromDto(dto: BlockDto): Block {
    switch (dto.blockType) {
      case 'hero':
        return HeroBlockTransformer.fromDto(dto)
      case 'caseCardsBlock':
        return CaseCardsBlockTransformer.fromDto(dto)
      case 'serviceCardsBlock':
        return ServiceCardsBlockTransformer.fromDto(dto)
      case 'ctaBlock':
        return CtaBlockTransformer.fromDto(dto)
      default:
        if (import.meta.client)
          console.warn('Unsupported block', dto)

        return {
          blockType: 'unsupported',
        }
    }
  }
}
