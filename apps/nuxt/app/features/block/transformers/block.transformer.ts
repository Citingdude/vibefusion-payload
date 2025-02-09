import { CasesBlockTransformer } from '~/features/block/transformers/casesBlock.transformer'
import { HeroBlockTransformer } from '~/features/block/transformers/heroBlock.transformer'
import type { Block, BlockDto } from '~/features/block/types/block.type'

export class BlockTransformer {
  static fromDto(dto: BlockDto | null): Block {
    if (!dto) {
      return {
        blockType: 'unsupportedBlock',
      }
    }

    switch (dto.blockType) {
      case 'hero':
        return HeroBlockTransformer.fromDto(dto)

      default:
        return {
          blockType: 'unsupportedBlock',
        }
    }
  }
}
