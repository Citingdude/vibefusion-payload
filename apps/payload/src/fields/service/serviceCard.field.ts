import { ButtonField } from "@/fields/button/button.field";
import { IconField } from "@/fields/icon/icon.field";
import { Field } from "payload";

export const ServiceCard: Field = {
  type: 'group',
  name: 'serviceCard',
  interfaceName: 'ServiceCard',
  fields: [
    IconField,
    {
      type: 'text',
      name: 'title',
    },
    ButtonField,
  ]
}