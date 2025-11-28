<template>
  <header class="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
    <div class="flex items-center justify-between px-4 h-16">
      <div class="flex items-center gap-3">
        <button 
          v-if="showBackButton"
          @click="goBack"
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft class="w-6 h-6 text-gray-700" />
        </button>
        
        <button 
          v-else
          @click="toggleMenu"
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu class="w-6 h-6 text-gray-700" />
        </button>

        <div>
          <h1 class="text-emerald-700 font-semibold">WINFIT</h1>
          <p class="text-xs text-gray-600">AgroRevenda</p>
        </div>
      </div>

      <button class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1">
        <ShoppingCart class="w-4 h-4" />
        PDV
      </button>
    </div>

    <!-- Side Menu -->
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 z-40"
      @click="closeMenu"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50" />
      <div 
        class="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-lg"
        @click.stop
      >
        <SideMenu @close="closeMenu" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { Menu, ArrowLeft, ShoppingCart } from 'lucide-vue-next'
import SideMenu from './SideMenu.vue'

const router = useRouter()
const route = useRoute()
const store = useAppStore()

const isMenuOpen = computed(() => store.isMenuOpen)

const showBackButton = computed(() => {
  return route.name !== 'dashboard'
})

const toggleMenu = () => {
  store.setMenuOpen(!store.isMenuOpen)
}

const closeMenu = () => {
  store.setMenuOpen(false)
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