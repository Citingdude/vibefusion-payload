import { ButtonField } from "@/fields/button/button.field";
import { Field } from "payload";

export const ButtonArrayField: Field = {
    type: 'array',
    name: 'buttons',
    fields: [ButtonField],
    maxRows: 2
}