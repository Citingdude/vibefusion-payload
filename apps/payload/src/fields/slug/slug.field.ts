import type { Field } from 'payload'
import slugify from 'slugify'

export const SlugField: Field = {
  name: 'slug',
  type: 'text',
  unique: true,
  required: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeChange: [
      ({ value }) => {
        return slugify(value, {
          lower: true,
          trim: true,
        })
      },
    ],
  },
}
