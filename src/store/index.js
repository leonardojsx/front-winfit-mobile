import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    selectedProduct: null,
    isDark: false
  },
  mutations: {
    SET_MENU_OPEN(state, isOpen) {
      state.isMenuOpen = isOpen
    },
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product
    },
    SET_THEME(state, isDark) {
      state.isDark = isDark
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
      
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    TOGGLE_THEME(state) {
      const newTheme = !state.isDark
      state.isDark = newTheme
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      
      if (newTheme) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
  actions: {
    setMenuOpen({ commit }, isOpen) {
      commit('SET_MENU_OPEN', isOpen)
    },
    setSelectedProduct({ commit }, product) {
      commit('SET_SELECTED_PRODUCT', product)
    },
    initializeTheme({ commit }) {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = savedTheme ? savedTheme === 'dark' : prefersDark
      
      commit('SET_THEME', isDark)
    },
    toggleTheme({ commit }) {
      commit('TOGGLE_THEME')
    }
  },
  getters: {
    isMenuOpen: state => state.isMenuOpen,
    selectedProduct: state => state.selectedProduct,
    isDark: state => state.isDark
  }
})