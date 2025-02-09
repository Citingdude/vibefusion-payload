export type ButtonType = 'hash' | 'internal' | 'external' | 'event'
export type ButtonColor = 'purple' | 'white' | 'transparent' | 'transparentWhite'

export interface Button {
  id: number
  title: string
  url: string
  type: ButtonType
  color: ButtonColor
}
