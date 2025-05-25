import type {
  BlogCardsBlock as BlogCardsBlockDto,
  CaseCardsBlock as CaseCardsBlockDto,
  CtaBlock as CtaBlockDto,
  HeroBlock as HeroBlockDto,
  KpiBlock as KpiBlockDto,
  ServiceCardsBlock as ServiceCardsBlockDto,
} from '@repo/payload'

export type BlockDto =
  HeroBlockDto
  | CaseCardsBlockDto
  | ServiceCardsBlockDto
  | CtaBlockDto
  | KpiBlockDto
  | BlogCardsBlockDto
