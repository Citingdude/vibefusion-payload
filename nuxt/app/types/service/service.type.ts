import { z } from 'zod'
import { ButtonSchema } from '../components/button.type'

export const ServiceSchema = z.object({
  id: z.number(),
  title: z.string(),
  icon: z.enum(['webdesign', 'webshop', 'branding']).nullable(),
  color: z.enum(['light', 'dark']),
  button: ButtonSchema,
})

export type Service = z.infer<typeof ServiceSchema>
