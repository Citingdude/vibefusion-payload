import type { CollectionConfig } from 'payload'
import { slugField } from '../../fields/slug/slug.field'

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
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
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
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField({
      fallbackField: 'title',
    }),

  ],
}
