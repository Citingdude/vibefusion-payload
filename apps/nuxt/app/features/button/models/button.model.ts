import { z } from 'zod'

export const ButtonDtoSchema = z.object({
  label: z.string(),
  link: z.string(),
  color: z.enum(['purple', 'white', 'transparent', 'transparentWhite']),
})

export const ButtonSchema = z.object({
  label: z.string(),
  link: z.string(),
  color: z.enum(['purple', 'white', 'transparent', 'transparentWhite']),
})

export type ButtonDto = z.infer<typeof ButtonDtoSchema>
export type Button = z.infer<typeof ButtonSchema>
