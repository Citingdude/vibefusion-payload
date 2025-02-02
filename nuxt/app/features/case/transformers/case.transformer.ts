import type { Case } from '@/features/case/types/case.type'
import type { Case as CaseDto } from '@payload-types'

export class CaseTransformer {
  static fromDto(dto: CaseDto): Case {
    return {
      id: dto.id.toString(),
      title: dto.title,
      description: dto.description || null,
    }
  }
}
