import type { Case as CaseCardDto } from '@repo/payload'
import type { CaseCard } from '~/features/case/types/caseCard.type'
import { ImageTransformer } from '~/features/image/transformers/image.transformer'

export class CaseCardTransformer {
  static fromDto(dto: CaseCardDto): CaseCard {
    return {
      id: dto.id,
      slug: dto.slug,
      title: dto.title,
      description: dto.description || null,
      image: dto.image
        ? ImageTransformer.fromDto(dto.image)
        : null,
    }
  }
}
