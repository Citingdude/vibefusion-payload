import type { Button } from './button.type'

export default interface Benefit {
  id: number
  icon?: 'rocket' | 'target' | 'eyeglass' | 'brush' | 'phone'
  title: string
  body?: string
  button?: Button
}
