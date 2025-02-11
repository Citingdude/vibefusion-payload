export type ButtonColor = 'purple' | 'white' | 'transparent' | 'transparentWhite'

export interface ButtonDto {
  label: string
  link: string
  color: ButtonColor
}

export interface Button {
  label: string
  link: string
  color: ButtonColor
}
