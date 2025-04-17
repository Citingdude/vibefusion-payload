import { contract } from '@payload/ts-rest/contract'
import { createNextHandler } from '@ts-rest/serverless/next'
import { getPayload } from 'payload'
import config from '../../../../payload.config'

const handler = createNextHandler(
  contract,
  {
    getHome: async () => {
      const payload = await getPayload({
        config,
      })

      const pages = await payload.find({
        collection: 'pages',
        where: {
          pageType: {
            equals: 'home',
          },
        },
        depth: 2,
      })

      const page = pages.docs[0]

      if (page) {
        return {
          status: 200,
          body: page,
        }
      }
      else {
        return {
          status: 404,
          body: null,
        }
      }
    },
    getPages: async () => {
      const payload = await getPayload({
        config,
      })

      const pages = await payload.find({
        collection: 'pages',
      })

      return {
        status: 200,
        body: pages.docs,
      }
    },
    getPage: async (args) => {
      const payload = await getPayload({
        config,
      })

      const pages = await payload.find({
        collection: 'pages',
        where: {
          url: {
            equals: args.query.path,
          },
        },
        depth: 2,
      })

      const page = pages.docs[0]

      if (page) {
        return {
          status: 200,
          body: page,
        }
      }
      else {
        return {
          status: 404,
          body: null,
        }
      }
    },
  },
  {
    basePath: '/api/tsrest',
    jsonQuery: true,
    responseValidation: true,
    handlerType: 'app-router',
  },
)

export {
  handler as DELETE,
  handler as GET,
  handler as OPTIONS,
  handler as PATCH,
  handler as POST,
  handler as PUT,
}
