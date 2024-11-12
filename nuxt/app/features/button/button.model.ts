import { z } from 'zod'

export const buttonDtoSchema = z.object({
  Label: z.string(),
  link: z.string(),
})

export const buttonSchema = z.object({
  label: z.string(),
  link: z.string(),
})

export type ButtonDto = z.infer<typeof buttonDtoSchema>
export type Button = z.infer<typeof buttonSchema>
