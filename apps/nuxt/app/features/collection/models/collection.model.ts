import { z } from 'zod'

export function CollectionDtoSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    docs: z.array(itemSchema),
    hasNextPage: z.boolean(),
    hasPrevPage: z.boolean(),
    limit: z.number(),
    nextPage: z.string().nullable(),
    page: z.number(),
    pagingCounter: z.number(),
    prevPage: z.string().nullable(),
    totalDocs: z.number(),
    totalPages: z.number(),
  })
}

export interface CollectionDto<T> {
  docs: T[]
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: string | null
  page: number
  pagingCounter: number
  prevPage: string | null
  totalDocs: number
  totalPages: number
}
