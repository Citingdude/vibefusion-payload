import type { Field } from 'payload'

const buttonColorOptions = [
  {
    label: 'Purple',
    value: 'purple',
  },
  {
    label: 'White',
    value: 'white',
  },
  {
    label: 'Transparent',
    value: 'transparent',
  },
  {
    label: 'Transparent white',
    value: 'transparentWhite',
  },
]

export const ButtonField: Field = {
  type: 'group',
  name: 'button',
  fields: [
    {
      type: 'text',
      name: 'label',
      required: true,
    },
    {
      type: 'text',
      required: true,
      name: 'link',
    },
    {
      type: 'select',
      name: 'color',
      required: true,
      options: buttonColorOptions,
      defaultValue: buttonColorOptions[0].value,
      enumName: 'buttonFieldColor',
    },
  ],
  interfaceName: 'ButtonField',
}
