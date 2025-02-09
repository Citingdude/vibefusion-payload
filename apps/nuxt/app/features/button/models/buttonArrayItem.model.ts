import { z } from 'zod'
import { ButtonDtoSchema, ButtonSchema } from '~/features/button/models/button.model'

export const ButtonArrayItemDtoSchema = z.object({
  id: z.string(),
  button: ButtonDtoSchema,
})

export const ButtonArrayItemSchema = z.object({
  id: z.string(),
  button: ButtonSchema,
})

export type ButtonArrayItemDto = z.infer<typeof ButtonArrayItemDtoSchema>
export type ButtonArrayItem = z.infer<typeof ButtonArrayItemSchema>
