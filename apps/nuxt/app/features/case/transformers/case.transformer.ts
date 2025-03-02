import type { Case } from '@repo/payload'
import type { CaseCardProps } from '~/features/case/components/CaseCard.vue'
import { ImageTransformer } from '~/features/image/transformers/image.transformer'

export class CaseTransformer {
  static toCaseCardProps(caseItem: Case, index: number): CaseCardProps {
    return {
      index,
      description: caseItem.description || null,
      image: caseItem.image
        ? ImageTransformer.fromDto(caseItem.image)
        : null,
      slug: caseItem.slug,
      title: caseItem.title,
    }
  }

  static toCaseCardPropsArray(cases: (Case | number)[]): CaseCardProps[] {
    const caseCards: CaseCardProps[] = []

    cases.forEach((caseItem, index) => {
      if (typeof caseItem !== 'number') {
        caseCards.push(this.toCaseCardProps(caseItem, index))
      }
    })

    return caseCards
  }
}
