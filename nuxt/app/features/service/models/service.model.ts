import { z } from 'zod'
import { buttonSchema } from '~/features/button/button.model'
import { imageSchema } from '~/features/image/image.model'

export const serviceSchema = z.object({
  id: z.string(),
  image: imageSchema.optional(),
  title: z.string(),
  button: buttonSchema.optional(),
})
