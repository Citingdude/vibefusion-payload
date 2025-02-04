import { z } from 'zod'
import { buttonDtoSchema, buttonSchema } from '~/features/button/button.model'
import { imageDtoSchema, imageSchema } from '~/features/image/image.model'

export const serviceCardDtoSchema = z.object({
  id: z.string(),
  serviceCard: z.object({
    image: imageDtoSchema,
    title: z.string(),
    button: buttonDtoSchema,
  }),
})

export const serviceCardSchema = z.object({
  id: z.string(),
  image: imageSchema.optional(),
  title: z.string(),
  button: buttonSchema.optional(),
})

export type ServiceCardDto = z.infer<typeof serviceCardDtoSchema>
export type ServiceCard = z.infer<typeof serviceCardSchema>
