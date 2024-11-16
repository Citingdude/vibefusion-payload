import type { Button, ButtonDto } from './button.model'

export class ButtonTransformer {
  static fromDto(dto: ButtonDto): Button {
    return {
      label: dto.Label,
      link: dto.link,
      color: dto.color,
    }
  }
}
