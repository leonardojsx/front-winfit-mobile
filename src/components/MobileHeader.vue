<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-40 shadow-sm">
    <div class="flex items-center justify-between px-4 h-16">
      <div class="flex items-center gap-3">
        <button 
          v-if="showBackButton"
          @click="goBack"
          class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft class="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        
        <button 
          v-else
          @click="toggleMenu"
          class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative z-50"
        >
          <Menu class="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        <div>
          <h1 class="text-emerald-700 dark:text-emerald-400 font-bold text-lg">WINFIT</h1>
          <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">AgroRevenda</p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <ThemeToggle />
        <button class="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
          <ShoppingCart class="w-4 h-4" />
          PDV
        </button>
      </div>
    </div>
  </header>

  <!-- Side Menu Overlay -->
  <Transition name="fade">
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click="closeMenu"
    />
  </Transition>
  
  <!-- Side Menu -->
  <Transition name="slide">
    <div 
      v-if="isMenuOpen"
      class="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50"
    >
      <SideMenu @close="closeMenu" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu, ArrowLeft, ShoppingCart } from 'lucide-vue-next'
import SideMenu from './SideMenu.vue'
import ThemeToggle from './ThemeToggle.vue'

const router = useRouter()
const route = useRoute()

// Estado local do menu
const isMenuOpen = ref(false)

const showBackButton = computed(() => {
  return route.name !== 'dashboard'
})

// Watch para controlar o scroll do body
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const toggleMenu = () => {
  console.log('Toggle clicked, current state:', isMenuOpen.value)
  isMenuOpen.value = !isMenuOpen.value
  console.log('New state:', isMenuOpen.value)
}

const closeMenu = () => {
  console.log('Closing menu')
  isMenuOpen.value = false
}

const goBack = () => {
  if (route.name === 'product') {
    router.push('/compendio')
  } else if (route.name === 'nova-receita') {
    router.push('/receitas')
  } else {
    router.push('/')
  }
}
</script>