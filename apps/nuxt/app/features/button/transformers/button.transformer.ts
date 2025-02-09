import type { ButtonField as ButtonDto } from '@payload-types'
import type { Button } from '~/features/button/types/button.type'

export class ButtonTransformer {
  static fromDto(dto: ButtonDto): Button {
    return {
      title: dto.label || '',
      url: dto.link || '',
      id: 1,
      type: 'internal',
      color: dto.color || 'purple',
    }
  }
}
