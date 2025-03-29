import type { BasePayload } from 'payload'
import { homePageSeeder } from '@payload/seeders/pages/homePage.seeder'
import { adminUserSeeder } from '@payload/seeders/user/adminUser.seeder'

export interface Seeder {
  name: string
  canRun: (payload: BasePayload) => Promise<boolean> | boolean
  seedFunction: (payload: BasePayload) => void
}

const seeders: Seeder[] = [
  adminUserSeeder,
  homePageSeeder,
]

export function createSeeder(
  name: string,
  seedFunction: (payload: BasePayload) => void,
): Seeder {
  return {
    name,
    async canRun(payload) {
      const seeders = await payload.find({
        collection: 'seeders',
        where: {
          slug: {
            equals: 'homepage',
          },
        },
      })

      const seeder = seeders.docs[0]

      if (!seeder) {
        return true
      }

      return false
    },
    async seedFunction(payload) {
      seedFunction(payload)

      await payload.create({
        collection: 'seeders',
        data: {
          slug: name,
        },
      })
    },
  }
}

export async function runSeeders(payload: BasePayload): Promise<void> {
  for (let index = 0; index < seeders.length; index++) {
    const seeder = seeders[index]

    const canRun = await seeder.canRun(payload)

    if (!canRun) {
      continue
    }

    seeder.seedFunction(payload)
  }
}
