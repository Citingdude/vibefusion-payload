import { z } from 'zod'
import { serviceSchema } from '~/features/service/models/service.model'

export const servicesBlockSchema = z.object({
  title: z.string(),
  services: serviceSchema.array(),
})

export type ServicesBlock = z.infer<typeof servicesBlockSchema>
