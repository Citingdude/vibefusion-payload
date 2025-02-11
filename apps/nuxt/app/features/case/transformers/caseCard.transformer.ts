import type { CaseCard, CaseCardDto } from '~/features/case/types/caseCard.type'
import { ImageTransformer } from '~/features/image/transformers/image.transformer'

export class CaseCardTransformer {
  static fromDto(dto: CaseCardDto): CaseCard {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      image: dto.image
        ? ImageTransformer.fromDto(dto.image)
        : null,
    }
  }
}
