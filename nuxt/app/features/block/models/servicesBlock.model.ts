import { z } from 'zod'
import { serviceSchema } from '~/features/service/models/service.model'
import { serviceCardDtoSchema } from '~/features/service/models/serviceCard.model'

export const servicesBlockDtoSchema = z.object({
  id: z.string(),
  blockName: z.string(),
  title: z.string().nullable(),
  serviceCards: serviceCardDtoSchema.array(),
  blockType: z.literal('service-cards-block'),
})

export const servicesBlockSchema = z.object({
  title: z.string().optional(),
  services: serviceSchema.array(),
})

export type ServicesBlockDto = z.infer<typeof servicesBlockDtoSchema>
export type ServicesBlock = z.infer<typeof servicesBlockSchema>
