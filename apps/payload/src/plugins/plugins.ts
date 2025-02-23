import type { Plugin } from 'payload'
import nestedDocsPlugin from '@/plugins/nested-docs/nestedDocs.plugin'
import seoPlugin from '@/plugins/seo/seo.plugin'

export const plugins: Plugin[] = [
  seoPlugin(),
  nestedDocsPlugin(),
]
