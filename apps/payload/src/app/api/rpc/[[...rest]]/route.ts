import { RPCHandler, serve } from '@orpc/server/next'
import { CORSPlugin } from '@orpc/server/plugins'
import { orpcRouter } from '@payload/orpc/router'

const handler = new RPCHandler(orpcRouter, {
  plugins: [
    new CORSPlugin({
      origin: origin => origin,
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    }),
  ],
})

export const {
  DELETE,
  GET,
  PATCH,
  POST,
  PUT,
} = serve(
  handler,
  {
    context: (req) => {
      return {
        'Accept-Language': req.headers.get('Accept-Language'),
        'Authorization': req.headers.get('Authorization'),
      }
    },
    prefix: '/api/rpc',
  },
)
