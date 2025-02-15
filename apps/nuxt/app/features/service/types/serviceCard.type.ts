import type { Button, ButtonDto } from '~/features/button/types/button.type'
import type { Icon, IconDto } from '~/features/icon/types/icon.type'

export interface ServiceCardDto {
  icon?: IconDto
  title?: string | null
  button: ButtonDto
}

export interface ServiceCard {
  icon: Icon | null
  title: string | null
  button: Button
}
