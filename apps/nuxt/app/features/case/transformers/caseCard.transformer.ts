import type { Case as CaseDto } from '@payload-types'
import type { CaseCard } from '~/features/case/types/caseCard.type'

export class CaseCardTransformer {
  static fromDto(dto: CaseDto | number): CaseCard {
    if (typeof dto === 'number') {
      return {
        description: '',
        title: '',
        id: '',
        category: '',
        image: {
          alt: '',
          src: '',
        },
        slug: '',
      }
    }

    return {
      id: dto.id.toString(),
      title: dto.title,
      description: dto.description || 'null',
      category: '',
      image: {
        alt: '',
        src: '',
      },
      slug: '',
    }
  }
}
