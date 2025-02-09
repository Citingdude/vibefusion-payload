import type { Button, ButtonDto } from '~/features/button/models/button.model'

export class ButtonTransformer {
  static fromDto(dto: ButtonDto): Button {
    return {
      color: dto.color,
      label: dto.label,
      link: dto.link,
    }
  }
}
