import type { CollectionConfig } from 'payload'
import { slugField } from '@payload/fields/slug/slug.field'

export const blogCategoryCollection: CollectionConfig = {
  slug: 'blogCategory',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField({
      fallbackField: 'name',
    }),
  ],
  access: {
    read: () => true,
  },
  defaultPopulate: {
    name: true,
    slug: true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Blog',
    defaultColumns: [
      'name',
      'slug',
    ],
  },
}
