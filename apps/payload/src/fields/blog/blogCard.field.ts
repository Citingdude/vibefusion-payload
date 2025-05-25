import type { Field } from 'payload'

export const BlogCardField: Field = {
  type: 'relationship',
  relationTo: 'blogs',
  name: 'blog',
  required: true,
}
