import type { FormConfig, FormData, FieldValue } from '@/widgets/form-generator/types'

export function useInitFormData(config: FormConfig): FormData {
  const data: FormData = {}

  Object.entries(config).forEach(([key, field]) => {
    const fieldKey = field.key || key
    data[fieldKey] =
      field.model !== undefined && field.model !== null ? field.model : getDefaultValue(field)
  })

  return data
}

function getDefaultValue(field: { type: string }): FieldValue {
  switch (field.type) {
    case 'checkbox':
      return false
    default:
      return ''
  }
}
