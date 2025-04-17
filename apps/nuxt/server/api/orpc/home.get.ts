import { useOrpc } from '~/composables/useOrpc'

export default defineEventHandler(async () => {
  const orpc = useOrpc()

  const homePage = await orpc.page.home()

  return homePage
})
