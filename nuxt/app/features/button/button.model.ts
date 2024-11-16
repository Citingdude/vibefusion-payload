import { z } from 'zod'
import { buttonColorDtoSchema, buttonColorSchema } from './buttonColor.model'

export const buttonDtoSchema = z.object({
  Label: z.string(),
  link: z.string(),
  color: buttonColorDtoSchema,
})

export const buttonSchema = z.object({
  label: z.string(),
  link: z.string(),
  color: buttonColorSchema,
})

export type ButtonDto = z.infer<typeof buttonDtoSchema>
export type Button = z.infer<typeof buttonSchema>
