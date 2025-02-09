import type { Button, ButtonDto } from '~/features/button/models/button.model'
import type { ButtonArrayItem, ButtonArrayItemDto } from '~/features/button/models/buttonArrayItem.model'
import { ButtonTransformer } from '~/features/button/transformers/button.transformer'

export class ButtonArrayItemTransformer {
  static fromDto(dto: ButtonArrayItemDto): ButtonArrayItem {
    return {
      id: dto.id,
      button: ButtonTransformer.fromDto(dto.button),
    }
  }
}
