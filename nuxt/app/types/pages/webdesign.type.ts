import type Benefit from '../components/benefit.type'
import type { Button } from '../components/button.type'
import type Faq from '../components/faq.type'
import type Step from '../components/step.type'

export default interface WebdesignPage {
  data: {
    id: number
    attributes: {
      createdAt: string
      updatedAt: string
      publishedAt: string
      hero: {
        id: number
        title: string
        body: string
        buttons: Button[]
      }
      why: {
        id: number
        title: string
        benefits: Benefit[]
      }
      process: {
        id: number
        title: string
        steps: Step[]
      }
      faq: {
        id: number
        title: string
        questions: Faq[]
      }
    }
  }
  meta: object
}
