import { z } from 'zod'

const ButtonTypeSchema = z.enum(['hash', 'internal', 'external', 'event'])
const ButtonColorSchema = z.enum(['purple', 'white', 'transparent', 'transparent-white'])

export const ButtonSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  type: ButtonTypeSchema,
  color: ButtonColorSchema,
})

export type Button = z.infer<typeof ButtonSchema>
export type Type = z.infer<typeof ButtonTypeSchema>
export type Color = z.infer<typeof ButtonColorSchema>
export type Size = 'small' | 'medium' | 'large'
