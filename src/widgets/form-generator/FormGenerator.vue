<template>
  <form class="form-generator" @submit.prevent="handleSubmit">
    <div v-for="(field, index) in formConfig" :key="index" class="form-field">
      <component
        :is="getFieldComponent(field.type)"
        v-model="formModel[field.key]"
        :label="field.label"
        :type="field.type"
        :options="field.options"
        :placeholder="field.attributes?.placeholder"
      />
    </div>

    <div class="form-actions">
      <button
        type="button"
        :disabled="!hasChanges"
        class="cancel-button"
        :class="{ disabled: !hasChanges }"
        @click="handleCancel"
      >
        Cancel
      </button>
      <button type="submit" class="submit-button">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import FormInput from '@/shared/ui/FormInput.vue'
import FormTextarea from '@/shared/ui/FormTextarea.vue'
import FormSelect from '@/shared/ui/FormSelect.vue'
import type { FormConfig, FormData } from './types'

defineProps<{
  formConfig: FormConfig
}>()

const formModel = defineModel<FormData>('form-data', {
  required: true,
})

const initialFormData = ref<FormData>(JSON.parse(JSON.stringify(formModel.value)))

const resetForm = () => {
  Object.keys(initialFormData.value).forEach((key) => {
    formModel.value[key] = initialFormData.value[key]
  })
}
const hasChanges = computed(
  () => JSON.stringify(formModel.value) !== JSON.stringify(initialFormData.value),
)
const handleSubmit = () => {
  console.log(formModel.value)
}

const handleCancel = () => {
  resetForm()
}

const getFieldComponent = (type: string) => {
  switch (type) {
    case 'input':
    case 'checkbox':
    case 'radio':
      return FormInput
    case 'textarea':
      return FormTextarea
    case 'select':
      return FormSelect
    default:
      return FormInput
  }
}
</script>

<style lang="scss">
.form-generator {
  .form-field {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;

      &:not(.disabled):hover {
        background-color: #ffebee; /* Легкий красный оттенок */
        border-color: #ffcdd2;
        color: #d32f2f; /* Темно-красный текст */
      }

      &.disabled {
        opacity: 0.6;
        cursor: not-allowed;

        /* Убираем hover-эффекты для disabled */
        &:hover {
          background-color: #f4f4f4;
          border-color: #ddd;
          color: inherit;
        }
      }

      &.submit-button {
        background-color: #42b983;
        color: white;
        border: none;
      }

      &.cancel-button {
        background-color: #f4f4f4;
        border: 1px solid #ddd;
      }

      &.cancel-button:hover {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>
