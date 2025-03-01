import type { CheckboxField, TextField } from 'payload'
import { formatSlugHook } from '../../fields/slug/hooks/formatSlug.hook'
import { ImageField } from '../../fields/ImageField'

interface SlugFieldOptions {
  fallbackField: string
}

export function slugField(options: SlugFieldOptions): [TextField, CheckboxField] {
  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    type: 'checkbox',
    defaultValue: true,
    admin: {
      hidden: true,
      position: 'sidebar',
    },
  }

  const slugField: TextField = {
    name: 'slug',
    type: 'text',
    unique: true,
    required: true,
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeChange: [
        formatSlugHook(options.fallbackField),
      ],
    },
  }

  return [
    slugField,
    checkBoxField,
  ]
}
