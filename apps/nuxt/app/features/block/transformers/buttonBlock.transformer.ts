import type { ButtonBlock, ButtonBlockDto } from '../models/buttonBlock.model'
import { ButtonTransformer } from '~/features/button/button.transformer'

export class ButtonBlockTransformer {
  static fromDto(dto: ButtonBlockDto): ButtonBlock {
    return {
      id: dto.id,
      button: ButtonTransformer.fromDto(dto.button),
    }
  }
}
