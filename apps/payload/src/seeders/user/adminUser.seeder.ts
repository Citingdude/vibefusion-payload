import type { Seeder } from '@payload/seeders/seeder'
import type { BasePayload } from 'payload'

export function seedAdminUser(payload: BasePayload) {
  const email = process.env.ADMIN_USER || null
  const password = process.env.ADMIN_PASSWORD || null

  if (!email || !password) {
    return
  }

  payload.create({
    collection: 'seeders',
    data: {
      slug: 'admin-user',
      hasSeederRun: true,
    },
  })

  payload.create({
    collection: 'users',
    data: {
      email,
      password,
    },
  })
}

export const adminUserSeeder: Seeder = {
  name: 'admin-user',
  seedFunction: seedAdminUser,
  canRun: async (payload) => {
    const seeders = await payload.find({
      collection: 'seeders',
      where: {
        slug: {
          equals: 'admin-user',
        },
      },
    })

    const seeder = seeders.docs[0]

    if (!seeder) {
      return true
    }

    return Boolean(!seeder.hasSeederRun)
  },
}
