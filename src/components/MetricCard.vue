<template>
  <div class="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg">
    <div class="p-5">
      <!-- Ícone e Título -->
      <div class="flex items-start gap-3 mb-4">
        <div :class="colorClasses">
          <component :is="icon" class="w-6 h-6" />
        </div>
        <div class="flex-1">
          <h3 class="text-gray-900">{{ title }}</h3>
          <p v-if="period" class="text-gray-500 text-sm">{{ period }}</p>
        </div>
      </div>

      <!-- Valor Principal -->
      <div class="mb-2">
        <p class="text-gray-900 text-3xl">{{ value }}</p>
      </div>

      <!-- Subtítulo -->
      <p class="text-gray-600 text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  icon: any
  title: string
  period: string
  value: string
  subtitle: string
  color: 'green' | 'blue' | 'orange'
}

const props = defineProps<Props>()

const colorClasses = computed(() => {
  const classes = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200 p-2.5 rounded-lg',
    blue: 'bg-blue-50 text-blue-700 border-blue-200 p-2.5 rounded-lg',
    orange: 'bg-orange-50 text-orange-700 border-orange-200 p-2.5 rounded-lg',
  }
  return classes[props.color]
})
</script>