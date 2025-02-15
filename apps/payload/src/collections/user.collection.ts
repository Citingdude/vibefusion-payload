import type { CollectionConfig } from 'payload'

export const UserCollection: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'User management'
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
