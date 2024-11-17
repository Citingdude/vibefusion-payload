import { Field } from "payload";
import { ButtonField } from "../ButtonField";

export const ServiceCardField: Field = {
  type: 'group',
  name: 'serviceCard',
  fields: [
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
    },
    {
      type: 'text',
      name: 'title',
    },
    ButtonField,
  ]
}