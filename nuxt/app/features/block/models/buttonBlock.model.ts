import { z } from 'zod'
import { buttonDtoSchema } from '~/features/components/button.model'

export const buttonBlockDtoSchema = z.object({
  id: z.string(),
  button: buttonDtoSchema,
})
