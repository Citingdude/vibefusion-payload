import { z } from 'zod'

export const ImageDtoSchema = z.object({
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
  focalX: z.number().nullable(),
  focalY: z.number().nullable(),
})

export const ImageSchema = z.object({
  alt: z.string(),
  src: z.string(),
})

export type ImageDto = z.infer<typeof ImageDtoSchema>
export type Image = z.infer<typeof ImageSchema>
