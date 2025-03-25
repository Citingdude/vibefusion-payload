import type { BasePayload } from 'payload'
import { adminUserSeeder } from '@payload/seeders/user/adminUser.seeder'

export interface Seeder {
  name: string
  canRun: (payload: BasePayload) => Promise<boolean>
  seedFunction: (payload: BasePayload) => void
}

const seeders: Seeder[] = [
  adminUserSeeder,
]

export function runSeeders(payload: BasePayload) {
  seeders.forEach(seeder => seeder.seedFunction(payload))
}
