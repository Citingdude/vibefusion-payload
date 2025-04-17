import type { Page } from '@payload/payload-types'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const contract = c.router({
  getHome: {
    method: 'GET',
    path: '/pages/home',
    responses: {
      200: c.type<Page>(),
      304: null,
    },
  },
  getPage: {
    method: 'GET',
    path: '/page',
    query: z.object({
      path: z.string(),
    }),
    responses: {
      200: c.type<Page>(),
      304: null,
    },
  },
  getPages: {
    method: 'GET',
    path: '/pages',
    responses: {
      200: c.type<Page[]>(),
      304: null,
    },
  },
})
