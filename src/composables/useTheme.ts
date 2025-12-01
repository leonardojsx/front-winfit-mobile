import { ref, computed, watch } from 'vue'

export type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')
const isDark = computed(() => theme.value === 'dark')

// Carregar tema salvo do localStorage
const savedTheme = localStorage.getItem('winfit-theme') as Theme
if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
  theme.value = savedTheme
}

// Aplicar tema inicial
if (theme.value === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Observar mudanças no tema
watch(theme, (newTheme) => {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  localStorage.setItem('winfit-theme', newTheme)
}, { immediate: true })

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme: theme,
    isDark,
    toggleTheme
  }
}