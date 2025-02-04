import type { HeroBlock } from '@/features/block/types/heroBlock.type'
import type { HeroBlock as HeroBlockDto } from '@payload-types'
import { ButtonTransformer } from '~/features/button/button.transformer'
import { ImageTransformer } from '~/features/image/image.transformer'

export class HeroBlockTransformer {
  static fromDto(dto: HeroBlockDto): HeroBlock {
    return {
      body: dto.body || null,
      id: dto.id || '',
      image: dto.image ? ImageTransformer.fromDto(dto.image) : null,
      title: dto.title,
      blockName: dto.blockName || null,
      blockType: dto.blockType,
      buttons: dto.buttons
        ? dto.buttons.map(button => ButtonTransformer.fromDto(button.button))
        : [],
    }
  }
}
