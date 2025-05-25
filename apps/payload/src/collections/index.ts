import { blogCollection } from '@payload/collections/blog/blog.collection'
import { seederCollection } from '@payload/collections/seeder/seeder.collection'
import { CaseCollection } from './case/case.collection'
import { IconCollection } from './icon/icon.collection'
import { MediaCollection } from './media/media.collection'
import { PageCollection } from './page/page.collection'
import { UserCollection } from './user/user.collection'

export const collections = [
  PageCollection,
  CaseCollection,
  MediaCollection,
  UserCollection,
  IconCollection,
  seederCollection,
  blogCollection,
]
