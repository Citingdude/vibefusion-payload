import type { HTMLConverter, LinkFields, SerializedLinkNode } from '@payloadcms/richtext-lexical'
import type { Block, TextFieldSingleValidation } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML, LinkFeature, LinkNode, populate } from '@payloadcms/richtext-lexical'
import { ButtonField } from '../../fields/button/button.field'

const LinkHTMLConverter: HTMLConverter<SerializedLinkNode> = {
  converter: ({ node, req }) => {
    const uploadDocument: {
      value?: any
      } = {}
      
    if(req) {
      populate({
        id: 9,
        collectionSlug: 'pages',
        currentDepth: 0,
        data: uploadDocument,
        depth: 2,
        draft: false,
        key: 'value',
        overrideAccess: false,
        req,
        showHiddenFields: false,
      })
    }

    const url = (req?.payload?.config?.serverURL || '') + uploadDocument?.value

    return `<a href="${url}"/>`
  },
  nodeTypes: [LinkNode.getType()], // This is the type of the lexical node that this converter can handle. Instead of hardcoding 'upload' we can get the node type directly from the UploadNode, since it's static.
}
export const CtaBlock: Block = {
  slug: 'ctaBlock',
  interfaceName: 'CtaBlock',
  fields: [
    {
      type: 'text',
      required: true,
      name: 'title',
    },
    {
      type: 'richText',
      required: true,
      name: 'body',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          LinkFeature({
            enabledCollections: ['pages', 'cases'],
            fields: ({ defaultFields }) => {
              const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
                if ('name' in field && field.name === 'url')
                  return false
                return true
              })

              return [
                ...defaultFieldsWithoutUrl,
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
                  },
                  label: ({ t }) => t('fields:enterURL'),
                  required: true,
                  validate: ((value, options) => {
                    if ((options?.siblingData as LinkFields)?.linkType === 'internal') {
                      return true // no validation needed, as no url should exist for internal links
                    }
                    return value ? true : 'URL is required'
                  }) as TextFieldSingleValidation,
                },
              ]
            },
          }),
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({

          }),
        ],
      }),
    },
    lexicalHTML('body', { name: 'bodyHtml' }),
    ButtonField,
  ],
}
