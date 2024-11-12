import type { HeroBlock, HeroBlockDto } from '../models/heroBlock.model'
import { ImageTransformer } from '~/features/image/image.transformer'
import { ButtonBlockTransformer } from './buttonBlock.transformer'

export class HeroBlockTransformer {
  static fromDto(dto: HeroBlockDto): HeroBlock {
    return {
      body: dto.body,
      id: dto.id,
      image: ImageTransformer.fromDto(dto.image),
      title: dto.title,
      blockName: dto.blockName,
      blockType: dto.blockType,
      buttons: dto.buttons.map(ButtonBlockTransformer.fromDto),
    }
  }
}
