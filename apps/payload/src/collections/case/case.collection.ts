import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug/slug.field'

export const CaseCollection: CollectionConfig = {
  slug: 'cases',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    ...slugField({
      fallbackField: 'title',
    }),
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
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
