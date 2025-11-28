import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: string
  name: string
  registryNumber: string
  colorTag: 'blue' | 'red' | 'green'
  mapaRegistry: string
  holder: string
  lastRevision: string
  activeIngredients: string[]
  chemicalGroups: string[]
  actionClass: string
  toxicologicalClass: string
  concentration: string
  formulation: string
  actionMode: string
  environmentalClass: string
}

export const useAppStore = defineStore('app', () => {
  const isMenuOpen = ref(false)
  const selectedProduct = ref<Product | null>(null)

  const setMenuOpen = (open: boolean) => {
    isMenuOpen.value = open
  }

  const setSelectedProduct = (product: Product | null) => {
    selectedProduct.value = product
  }

  return {
    isMenuOpen,
    selectedProduct,
    setMenuOpen,
    setSelectedProduct
  }
})