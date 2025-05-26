import type { CollectionConfig } from 'payload'
import { slugField } from '@payload/fields/slug/slug.field'

export const blogCollection: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField({
      fallbackField: 'title',
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
  access: {
    read: () => true,
  },
  defaultPopulate: {
    slug: true,
    title: true,
    description: true,
    image: true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Blog',
    defaultColumns: [
      'title',
      'slug',
    ],
  },
}
