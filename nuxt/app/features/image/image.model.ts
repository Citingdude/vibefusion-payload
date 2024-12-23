import { z } from 'zod'

export const imageDtoSchema = z.object({
  id: z.number(),
  alt: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
  url: z.string(),
  thumbnailURL: z.string().nullable(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  width: z.number(),
  height: z.number(),
  focalX: z.number(),
  focalY: z.number(),
})

export const imageSchema = z.object({
  alt: z.string(),
  src: z.string(),
})

export type ImageDto = z.infer<typeof imageDtoSchema>
export type Image = z.infer<typeof imageSchema>
