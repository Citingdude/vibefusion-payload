import { z } from 'zod'
import { ServiceCardDtoSchema } from '~/features/service/models/serviceCard.model'

export const ServiceCardArrayItem = z.object({
  id: z.string(),
  serviceCard: ServiceCardDtoSchema,
})
