import { SlugField } from '@/fields/slug/slug.field'
import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Cases: CollectionConfig = {
  slug: 'cases',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    SlugField,
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}