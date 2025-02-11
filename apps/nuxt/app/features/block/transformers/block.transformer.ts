import { CaseCardsBlockTransformer } from '~/features/block/transformers/caseCardsBlock.transformer'
import { HeroBlockTransformer } from '~/features/block/transformers/heroBlock.transformer'
import type { Block, BlockDto } from '~/features/block/types/block.type'

export class BlockTransformer {
  static fromDto(dto: BlockDto): Block {
    switch (dto.blockType) {
      case 'hero':
        return HeroBlockTransformer.fromDto(dto)
      case 'caseCardsBlock':
        return CaseCardsBlockTransformer.fromDto(dto)
    }
  }
}
