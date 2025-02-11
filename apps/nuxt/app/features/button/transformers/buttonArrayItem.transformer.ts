import { ButtonTransformer } from '~/features/button/transformers/button.transformer'
import type { ButtonArrayItem, ButtonArrayItemDto } from '~/features/button/types/buttonArrayItem.type'

export class ButtonArrayItemTransformer {
  static fromDto(dto: ButtonArrayItemDto): ButtonArrayItem {
    return {
      id: dto.id,
      button: ButtonTransformer.fromDto(dto.button),
    }
  }
}
