import { useOrpc } from '~/composables/useOrpc'

export default defineEventHandler(async () => {
  const orpc = useOrpc()

  const pages = await orpc.page.list()

  return pages
})
