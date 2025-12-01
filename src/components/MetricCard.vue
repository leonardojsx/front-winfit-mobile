<template>
  <div :class="cardClasses" class="group cursor-pointer">
    <div :class="compact ? 'p-5' : 'p-5'">
      <!-- Ícone e Título -->
      <div class="flex items-start gap-3 mb-4">
        <div :class="iconClasses">
          <component :is="icon" :class="compact ? 'w-4 h-4' : 'w-6 h-6'" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 :class="compact ? 'text-sm font-medium leading-tight' : 'text-base font-medium'" class="text-gray-900 dark:text-gray-100">{{ title }}</h3>
          <p v-if="period" :class="compact ? 'text-xs' : 'text-sm'" class="text-gray-500 dark:text-gray-400 mt-1">{{ period }}</p>
        </div>
        <div v-if="trending" class="flex items-center text-emerald-600">
          <TrendingUp class="w-4 h-4" />
        </div>
      </div>

      <!-- Valor Principal -->
      <div class="mb-3">
        <p :class="compact ? 'text-lg font-bold' : 'text-3xl font-bold'" class="text-gray-900 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
          {{ value }}
        </p>
      </div>

      <!-- Subtítulo com indicadores -->
      <div class="flex items-center justify-between">
        <p :class="compact ? 'text-xs leading-tight' : 'text-sm'" class="text-gray-600 flex-1">{{ subtitle }}</p>
        <div v-if="showGrowth" class="flex items-center text-emerald-600 text-sm font-medium">
          <ArrowUpRight class="w-4 h-4 mr-1" />
          +15
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TrendingUp, ArrowUpRight } from 'lucide-vue-next'

interface Props {
  icon: any
  title: string
  period: string
  value: string
  subtitle: string
  color: 'green' | 'blue' | 'orange'
  compact?: boolean
  trending?: boolean
  showGrowth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
  trending: false,
  showGrowth: false
})

const cardClasses = computed(() => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 shadow-sm hover:shadow-lg dark:shadow-gray-900/10 transition-all duration-300 transform hover:-translate-y-1'
  const gradients = {
    green: 'hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white dark:hover:from-emerald-950/30 dark:hover:to-gray-800',
    blue: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-white dark:hover:from-blue-950/30 dark:hover:to-gray-800',
    orange: 'hover:bg-gradient-to-br hover:from-orange-50 hover:to-white dark:hover:from-orange-950/30 dark:hover:to-gray-800'
  }
  return `${baseClasses} ${gradients[props.color]}`
})

const iconClasses = computed(() => {
  const padding = props.compact ? 'p-2' : 'p-2.5'
  const classes = {
    green: `bg-gradient-to-br from-emerald-500 to-emerald-600 text-white ${padding} rounded-xl shadow-sm`,
    blue: `bg-gradient-to-br from-blue-500 to-blue-600 text-white ${padding} rounded-xl shadow-sm`,
    orange: `bg-gradient-to-br from-orange-500 to-orange-600 text-white ${padding} rounded-xl shadow-sm`,
  }
  return classes[props.color]
})
</script>