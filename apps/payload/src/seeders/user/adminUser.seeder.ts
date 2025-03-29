import type { BasePayload } from 'payload'
import { createSeeder } from '@payload/seeders/seeder'

export const adminUserSeeder = createSeeder('admin-user', seedAdminUser)

export function seedAdminUser(payload: BasePayload) {
  const email = process.env.ADMIN_USER || null
  const password = process.env.ADMIN_PASSWORD || null

  if (!email || !password) {
    return
  }

  payload.create({
    collection: 'users',
    data: {
      email,
      password,
    },
  })
}
