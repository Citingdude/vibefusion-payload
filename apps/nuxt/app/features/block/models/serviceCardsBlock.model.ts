import { z } from 'zod'
import { ServiceCardDtoSchema, ServiceCardSchema } from '~/features/service/models/serviceCard.model'

export const ServiceCardsDtoBlockSchema = z.object({
  id: z.string(),
  blockName: z.string().nullable(),
  title: z.string().nullable(),
  serviceCards: ServiceCardDtoSchema.array(),
  blockType: z.literal('serviceCardsBlock'),
})

export const ServiceCardsBlockSchema = z.object({
  title: z.string().optional(),
  services: ServiceCardSchema.array(),
  blockType: z.literal('serviceCardsBlock'),
})

export type ServiceCardsBlockDto = z.infer<typeof ServiceCardsDtoBlockSchema>
export type ServiceCardsBlock = z.infer<typeof ServiceCardsBlockSchema>
