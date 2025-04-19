<script setup lang="ts">
import { reactive } from 'vue'
import FormGenerator from '@/widgets/form-generator'
import type { FormConfig, FormData } from '@/widgets/form-generator/types'
import { useInitFormData } from '@/shared/helpers/useInitFormData'

const formConfig: FormConfig = {
  userName: {
    type: 'input',
    key: 'name',
    model: 'John Doe',
    label: 'Name',
    attributes: {
      placeholder: 'Enter your name',
      slot: `<ol><li>Item 1</li><li>Item 2</li><li>кастомизация инпута</li></li></ol>`,
    },
  },
  cityList: {
    type: 'select',
    key: 'cities',
    model: 'NY',
    label: 'City',
    attributes: {
      placeholder: 'Select your city',
    },
    options: [
      {
        label: 'New York',
        value: 'NY',
      },
      {
        label: 'London',
        value: 'LDN',
      },
    ],
  },
  interests: {
    type: 'checkbox',
    key: 'interests',
    model: true,
    label: 'Interests',
  },
  areaMessage: {
    type: 'textarea',
    key: 'message',
    model: 'message',
    label: 'Message',
    attributes: {
      placeholder: 'Enter your message',
    },
  },
  areadd: {
    type: 'textarea',
    key: 'ss',
    model: 'message',
    label: 'Message',
    attributes: {
      placeholder: 'Enter your message',
    },
  },
}

const formData = reactive<FormData>(useInitFormData(formConfig))
</script>

<template>
  <div>
    <FormGenerator v-model:form-data="formData" :form-config="formConfig" />
  </div>
</template>
