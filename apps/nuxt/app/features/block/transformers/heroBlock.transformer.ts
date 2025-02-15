import type { HeroBlock as HeroBlockDto } from '@payload-types'
import type { HeroBlock } from '~/features/block/types/heroBlock.type'
import { ButtonTransformer } from '~/features/button/transformers/button.transformer'
import { ImageTransformer } from '~/features/image/transformers/image.transformer'

export class HeroBlockTransformer {
  static fromDto(dto: HeroBlockDto): HeroBlock {
    return {
      body: dto.body || null,
      id: dto.id || null,
      image: dto.image
        ? ImageTransformer.fromDto(dto.image)
        : null,
      title: dto.title,
      blockType: dto.blockType,
      buttons: dto.buttons
        ? dto.buttons.map(buttonItem => ButtonTransformer.fromDto(buttonItem.button))
        : [],
    }
  }
}
