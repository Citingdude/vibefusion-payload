import { z } from 'zod'
import { buttonDtoSchema, buttonSchema } from '~/features/button/button.model'

export const buttonBlockDtoSchema = z.object({
  id: z.string(),
  button: buttonDtoSchema,
})

export const buttonBlockSchema = z.object({
  id: z.string(),
  button: buttonSchema,
})

export type ButtonBlockDto = z.infer<typeof buttonBlockDtoSchema>
export type ButtonBlock = z.infer<typeof buttonBlockSchema>
