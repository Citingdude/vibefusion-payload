import type { CollectionConfig, Where } from 'payload'

export const Cases: CollectionConfig = {
  slug: 'cases',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
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