import type { CtaBlock as CtaBlockDto } from '@repo/payload'
import type { CtaBlock } from '~/features/block/types/ctaBlock.type'
import { ButtonTransformer } from '~/features/button/transformers/button.transformer'

export class CtaBlockTransformer {
  static fromDto(dto: CtaBlockDto): CtaBlock {
    return {
      body: dto.bodyHtml || null,
      title: dto.title,
      button: ButtonTransformer.fromDto(dto.button),
      blockType: 'ctaBlock',
    }
  }
}
