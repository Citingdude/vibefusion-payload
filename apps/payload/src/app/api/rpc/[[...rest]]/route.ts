import { RPCHandler } from '@orpc/server/fetch'
import { CORSPlugin } from '@orpc/server/plugins'
import { orpcRouter } from '@payload/orpc/router'

const handler = new RPCHandler(orpcRouter, {
  plugins: [
    new CORSPlugin({
      origin: () => 'http://localhost:3000',
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTION'],
    }),
  ],
})

async function handleRequest(request: Request) {
  const { response } = await handler.handle(request, {
    prefix: '/api/rpc',
    context: {
      'Accept-Language': request.headers.get('Accept-Language'),
      'Authorization': request.headers.get('Authorization'),
    },
  })

  return response ?? new Response('Not found', { status: 404 })
}

export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const PATCH = handleRequest
export const DELETE = handleRequest
