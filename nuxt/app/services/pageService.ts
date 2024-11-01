import { type PageHome, PageHomeSchema } from '~/types/pages/home.type'
import type WebdesignPage from '~/types/pages/webdesign.type'

export function fetchPageHome() {
  return useApiFetch('homepage', {
    query: {
      'populate[0]': 'hero.primary_button',
      'populate[1]': 'hero.secondary_button',
      'populate[2]': 'services.button',
      'populate[3]': 'cta.button',
      'populate[4]': 'seo.metaSocial',
    },
    transform: (response: PageHome) => response.data.attributes,
  }, PageHomeSchema)
}

export function fetchPageWebdesign() {
  return useApiFetch('webdesign', {
    transform: (response: WebdesignPage) => response.data.attributes,
    query: {
      'populate[0]': 'hero.buttons',
      'populate[1]': 'why.benefits.button',
      'populate[2]': 'process.steps',
      'populate[3]': 'faq.questions',
    },
  })
}
