/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkGroupField".
 */
export type LinkGroupField =
  | {
      link: LinkField;
      id?: string | null;
    }[]
  | null;
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCardList".
 */
export type ServiceCardList =
  | {
      serviceCard: ServiceCard;
      id?: string | null;
    }[]
  | null;
/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    pages: Page;
    cases: Case;
    media: Media;
    users: User;
    icons: Icon;
    seeders: Seeder;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    cases: CasesSelect<false> | CasesSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    icons: IconsSelect<false> | IconsSelect<true>;
    seeders: SeedersSelect<false> | SeedersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  content?: (HeroBlock | ServiceCardsBlock | CaseCardsBlock | CtaBlock | KpiBlock)[] | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (number | null) | Media;
  };
  title: string;
  slug: string;
  slugLock?: boolean | null;
  url?: string | null;
  pageType?: 'home' | null;
  parent?: (number | null) | Page;
  breadcrumbs?:
    | {
        doc?: (number | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  highlightTitle: {
    title: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    };
    html?: string | null;
  };
  body?: string | null;
  links?: LinkGroupField;
  image?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkField".
 */
export interface LinkField {
  type?: ('reference' | 'custom') | null;
  newTab?: boolean | null;
  reference?:
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'cases';
        value: number | Case;
      } | null);
  url?: string | null;
  label: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cases".
 */
export interface Case {
  id: number;
  content?: {
    image?: (number | null) | Media;
    description?: string | null;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (number | null) | Media;
  };
  title: string;
  slug: string;
  slugLock?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCardsBlock".
 */
export interface ServiceCardsBlock {
  title?: string | null;
  serviceCardList?: ServiceCardList;
  id?: string | null;
  blockName?: string | null;
  blockType: 'serviceCardsBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCard".
 */
export interface ServiceCard {
  icon?: (number | null) | Icon;
  title?: string | null;
  link: LinkField;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CaseCardsBlock".
 */
export interface CaseCardsBlock {
  title?: string | null;
  caseCards?:
    | {
        case: number | Case;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'caseCardsBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CtaBlock".
 */
export interface CtaBlock {
  title: string;
  content?: RichTextField;
  link: LinkField;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ctaBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextField".
 */
export interface RichTextField {
  richtext?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "KpiBlock".
 */
export interface KpiBlock {
  title?: string | null;
  kpiCards?:
    | {
        kpiCard: KpiCard;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'kpiBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "KpiCard".
 */
export interface KpiCard {
  icon?: (number | null) | Icon;
  title: string;
  body: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "seeders".
 */
export interface Seeder {
  id: number;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'cases';
        value: number | Case;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'icons';
        value: number | Icon;
      } | null)
    | ({
        relationTo: 'seeders';
        value: number | Seeder;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  content?:
    | T
    | {
        hero?: T | HeroBlockSelect<T>;
        serviceCardsBlock?: T | ServiceCardsBlockSelect<T>;
        caseCardsBlock?: T | CaseCardsBlockSelect<T>;
        ctaBlock?: T | CtaBlockSelect<T>;
        kpiBlock?: T | KpiBlockSelect<T>;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  title?: T;
  slug?: T;
  slugLock?: T;
  url?: T;
  pageType?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  highlightTitle?:
    | T
    | {
        title?: T;
        html?: T;
      };
  body?: T;
  links?: T | LinkGroupFieldSelect<T>;
  image?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkGroupField_select".
 */
export interface LinkGroupFieldSelect<T extends boolean = true> {
  link?: T | LinkFieldSelect<T>;
  id?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkField_select".
 */
export interface LinkFieldSelect<T extends boolean = true> {
  type?: T;
  newTab?: T;
  reference?: T;
  url?: T;
  label?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCardsBlock_select".
 */
export interface ServiceCardsBlockSelect<T extends boolean = true> {
  title?: T;
  serviceCardList?: T | ServiceCardListSelect<T>;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCardList_select".
 */
export interface ServiceCardListSelect<T extends boolean = true> {
  serviceCard?: T | ServiceCardSelect<T>;
  id?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCard_select".
 */
export interface ServiceCardSelect<T extends boolean = true> {
  icon?: T;
  title?: T;
  link?: T | LinkFieldSelect<T>;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CaseCardsBlock_select".
 */
export interface CaseCardsBlockSelect<T extends boolean = true> {
  title?: T;
  caseCards?:
    | T
    | {
        case?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CtaBlock_select".
 */
export interface CtaBlockSelect<T extends boolean = true> {
  title?: T;
  content?: T | RichTextFieldSelect<T>;
  link?: T | LinkFieldSelect<T>;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextField_select".
 */
export interface RichTextFieldSelect<T extends boolean = true> {
  richtext?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "KpiBlock_select".
 */
export interface KpiBlockSelect<T extends boolean = true> {
  title?: T;
  kpiCards?:
    | T
    | {
        kpiCard?: T | KpiCardSelect<T>;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "KpiCard_select".
 */
export interface KpiCardSelect<T extends boolean = true> {
  icon?: T;
  title?: T;
  body?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cases_select".
 */
export interface CasesSelect<T extends boolean = true> {
  content?:
    | T
    | {
        image?: T;
        description?: T;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  title?: T;
  slug?: T;
  slugLock?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons_select".
 */
export interface IconsSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "seeders_select".
 */
export interface SeedersSelect<T extends boolean = true> {
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}