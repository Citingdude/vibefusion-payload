import type { CollectionConfig } from 'payload'

export const seederCollection: CollectionConfig = {
  slug: 'seeders',
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'hasSeederRun',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
