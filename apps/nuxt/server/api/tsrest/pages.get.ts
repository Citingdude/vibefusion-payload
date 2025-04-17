import { useTsRest } from '~/composables/useTsRest'

export default defineEventHandler(async () => {
  const tsRest = useTsRest()
  const response = await tsRest.getPages()

  return response
})
