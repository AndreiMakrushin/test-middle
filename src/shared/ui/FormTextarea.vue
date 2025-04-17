<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
}>()
const model = defineModel<string>()
</script>

<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <textarea v-model="model" :placeholder="placeholder" />
  </div>
</template>

<style scoped></style>
