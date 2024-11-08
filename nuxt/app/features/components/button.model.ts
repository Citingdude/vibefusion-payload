import { z } from 'zod'

export const buttonDtoSchema = z.object({
  Label: z.string(),
  link: z.string(),
})
