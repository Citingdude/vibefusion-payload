import type { CollectionConfig } from 'payload'

export const IconCollection: CollectionConfig = {
  slug: 'icons',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Media',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['image/svg+xml'],
  },
}
