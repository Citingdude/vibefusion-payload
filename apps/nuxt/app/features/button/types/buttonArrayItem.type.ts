import type { Button, ButtonDto } from '~/features/button/types/button.type'

export interface ButtonArrayItemDto {
  id: string
  button: ButtonDto
}
export interface ButtonArrayItem {
  id: string
  button: Button
}
