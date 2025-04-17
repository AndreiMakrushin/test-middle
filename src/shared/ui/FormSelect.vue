<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  label?: string
  options: { label: string; value: string }[]
  placeholder?: string
}>()

const model = defineModel<string>()
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectedOption = computed(() => {
  return props.options.find((option) => option.value === model.value)
})

const selectOption = (value: string) => {
  model.value = value
  toggleDropdown()
}
</script>

<template>
  <div class="custom-select" :class="{ 'is-open': isOpen }">
    <div v-if="label" class="select-label">{{ label }}</div>

    <div class="select-header" @click="toggleDropdown">
      <span class="selected-value">
        {{ selectedOption?.label || placeholder || 'Выберите вариант' }}
      </span>
      <span class="arrow-icon">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </div>

    <transition name="slide-fade">
      <div v-show="isOpen" class="select-options">
        <div
          v-for="option in options"
          :key="option.value"
          class="select-option"
          :class="{ 'is-selected': model === option.value }"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
          <span v-if="model === option.value" class="checkmark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 100%;
  max-width: 300px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 1.5rem;

  &.is-open {
    .select-header {
      border-color: #6366f1;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    }

    .arrow-icon {
      transform: rotate(180deg);
    }
  }
}

.select-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.select-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 44px;

  &:hover {
    border-color: #9ca3af;
  }
}

.selected-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #111827;
}

.arrow-icon {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
  color: #6b7280;
}

.select-options {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  max-height: 240px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 10;
}

.select-option {
  position: relative;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f9fafb;
    color: #6366f1;
  }

  &.is-selected {
    background-color: #f5f3ff;
    color: #6366f1;
    font-weight: 500;
  }
}

.checkmark {
  display: flex;
  align-items: center;
  color: #6366f1;
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.select-options::-webkit-scrollbar {
  width: 6px;
}

.select-options::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 0 0.5rem 0.5rem 0;
}

.select-options::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.select-options::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
