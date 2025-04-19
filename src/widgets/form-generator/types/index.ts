export type FieldValue = string | boolean

export interface FormFieldOption {
  label: string
  value: FieldValue
}

export interface BaseFormField {
  label: string
  attributes?: {
    placeholder?: string
    rows?: number
    [key: string]: unknown
    slot?: string
  }
  options?: FormFieldOption[]
}

export interface InputFormField extends BaseFormField {
  type: 'input' | 'textarea' | 'radio'
  model: string
  key: string
}

export interface SelectFormField extends BaseFormField {
  type: 'select'
  key: string
  model: string
  options: FormFieldOption[]
}

export interface CheckboxFormField extends BaseFormField {
  type: 'checkbox'
  key: string
  model: boolean
}

export type FormField = InputFormField | SelectFormField | CheckboxFormField

export interface FormConfig {
  [key: string]: FormField
}

export type FormData = Record<string, FieldValue>
