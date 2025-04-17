<script setup lang="ts">
defineProps<{
  label: string
  type: string
  placeholder?: string
}>()

const model = defineModel<string | boolean | number>()
</script>

<template>
  <div class="form-input">
    <label v-if="label">{{ label }}</label>
    <input v-model="model" :type="type" :placeholder="placeholder" />
  </div>
</template>
