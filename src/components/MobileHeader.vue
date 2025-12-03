<template>
  <div>
    <header>
      <div style="display: flex; align-items: center;">
        <button 
          v-if="showBackButton"
          @click="goBack"
          class="menu-btn"
        >
          <ArrowLeftIcon style="width: 24px; height: 24px; color: #374151;" />
        </button>
        
        <button 
          v-else
          @click="toggleMenu"
          class="menu-btn"
        >
          <MenuIcon style="width: 24px; height: 24px; color: #374151;" />
        </button>

        <div class="logo">
          <h1>WINFIT</h1>
          <p>AgroRevenda</p>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 12px;">
        <ThemeToggle />
        <button class="btn-pdv">
          <ShoppingCartIcon style="width: 16px; height: 16px;" />
          PDV
        </button>
      </div>
    </header>

    <!-- Side Menu Overlay -->
    <transition name="fade">
      <div 
        v-if="isMenuOpen" 
        class="menu-overlay"
        @click="closeMenu"
      />
    </transition>
    
    <!-- Side Menu -->
    <transition name="slide">
      <SideMenu 
        v-if="isMenuOpen"
        @close="closeMenu" 
      />
    </transition>
  </div>
</template>

<script>
import { Menu, ArrowLeft, ShoppingCart } from 'lucide-vue'
import SideMenu from './SideMenu.vue'
import ThemeToggle from './ThemeToggle.vue'

export default {
  name: 'MobileHeader',
  components: {
    MenuIcon: Menu,
    ArrowLeftIcon: ArrowLeft,
    ShoppingCartIcon: ShoppingCart,
    SideMenu,
    ThemeToggle
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    showBackButton() {
      return this.$route.name !== 'dashboard'
    }
  },
  watch: {
    isMenuOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    '$route'() {
      // Fechar menu automaticamente quando a rota mudar
      if (this.isMenuOpen) {
        this.isMenuOpen = false
      }
    }
  },
  methods: {
    toggleMenu() {
      console.log('Toggle clicked, current state:', this.isMenuOpen)
      this.isMenuOpen = !this.isMenuOpen
      console.log('New state:', this.isMenuOpen)
    },
    closeMenu() {
      console.log('Closing menu')
      this.isMenuOpen = false
    },
    goBack() {
      if (this.$route.name === 'product') {
        this.$router.push('/compendio')
      } else if (this.$route.name === 'nova-receita') {
        this.$router.push('/receitas')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>