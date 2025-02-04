import { z } from 'zod'

export const buttonColorDtoSchema = z.enum([
  'purple',
  'white',
  'transparent',
  'transparentWhite',
])

export const buttonColorSchema = z.enum([
  'purple',
  'white',
  'transparent',
  'transparentWhite',
])
