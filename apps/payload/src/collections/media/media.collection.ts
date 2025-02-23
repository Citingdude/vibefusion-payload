import type { CollectionConfig } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
