import type { HeroBlock, HeroBlockDto } from '~/features/block/types/heroBlock.type'
import { ButtonArrayItemTransformer } from '~/features/button/transformers/buttonArrayItem.transformer'
import { ImageTransformer } from '~/features/image/transformers/image.transformer'

export class HeroBlockTransformer {
  static fromDto(dto: HeroBlockDto): HeroBlock {
    return {
      body: dto.body,
      id: dto.id,
      image: dto.image
        ? ImageTransformer.fromDto(dto.image)
        : null,
      title: dto.title,
      blockType: dto.blockType,
      buttons: dto.buttons.map(ButtonArrayItemTransformer.fromDto),
    }
  }
}
