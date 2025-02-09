import { z } from 'zod'
import { ButtonDtoSchema, ButtonSchema } from '~/features/button/models/button.model'
import { ImageDtoSchema, ImageSchema } from '~/features/image/models/image.model'

export const ServiceCardDtoSchema = z.object({
  image: ImageDtoSchema,
  title: z.string(),
  button: ButtonDtoSchema,
})

export const ServiceCardSchema = z.object({
  id: z.string(),
  image: ImageSchema.optional(),
  title: z.string(),
  button: ButtonSchema.optional(),
})

export type ServiceCardDto = z.infer<typeof ServiceCardDtoSchema>
export type ServiceCard = z.infer<typeof ServiceCardSchema>
