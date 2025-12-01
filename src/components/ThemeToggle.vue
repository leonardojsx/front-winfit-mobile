<template>
  <button
    @click="toggleTheme"
    @blur="$event.target.blur()"
    class="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
    :class="[
      isDark 
        ? 'bg-gray-800 text-yellow-400' 
        : 'bg-white text-gray-600 shadow-sm border border-gray-200'
    ]"
  >
    <Sun v-if="isDark" class="w-5 h-5" />
    <Moon v-else class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>