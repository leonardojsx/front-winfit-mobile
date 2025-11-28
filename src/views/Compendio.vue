<template>
  <main class="pt-16 pb-6 px-4">
    <div class="max-w-md mx-auto">
      <!-- Campo de Busca -->
      <div class="mb-4 pt-4">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Nome / Nº Registro"
            v-model="searchTerm"
            class="w-full pl-10 h-10 border border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg px-3 text-sm"
          />
        </div>
      </div>

      <!-- Lista de Produtos -->
      <div class="space-y-3">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden rounded-lg border border-gray-200"
          @click="selectProduct(product)"
        >
          <div class="flex">
            <!-- Barra Lateral Colorida -->
            <div :class="`w-1.5 ${getColorClass(product.colorTag)}`" />
            
            <!-- Conteúdo do Card -->
            <div class="flex-1 p-4">
              <h3 class="text-gray-900 mb-1">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm">{{ product.registryNumber }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-gray-500">Nenhum produto encontrado</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from 'lucide-vue-next'
import type { Product } from '@/types'

const router = useRouter()
const searchTerm = ref('')

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ACTARA 10 GR',
    registryNumber: 'nº 3200',
    colorTag: 'blue',
    mapaRegistry: '3200 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '15/03/2024',
    activeIngredients: ['TIAMETOXAM'],
    chemicalGroups: ['NEONICOTINOIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '100 g/kg',
    formulation: 'Granulado (GR)',
    actionMode: 'Contato e ingestão',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
  {
    id: '2',
    name: 'ROUNDUP ORIGINAL DI',
    registryNumber: 'nº 1679',
    colorTag: 'green',
    mapaRegistry: '1679 - MAPA',
    holder: 'MONSANTO DO BRASIL LTDA',
    lastRevision: '22/01/2024',
    activeIngredients: ['GLIFOSATO'],
    chemicalGroups: ['GLICINA SUBSTITUÍDA'],
    actionClass: 'Herbicida',
    toxicologicalClass: 'Classe IV - Pouco tóxico',
    concentration: '480 g/L',
    formulation: 'Concentrado Solúvel (SL)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '3',
    name: 'CERCOBIN 700 WP',
    registryNumber: 'nº 0189',
    colorTag: 'red',
    mapaRegistry: '0189 - MAPA',
    holder: 'IHARA COMÉRCIO DE PRODUTOS QUÍMICOS LTDA',
    lastRevision: '10/02/2024',
    activeIngredients: ['TIOFANATO METÍLICO'],
    chemicalGroups: ['BENZIMIDAZOL'],
    actionClass: 'Fungicida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '700 g/kg',
    formulation: 'Pó Molhável (WP)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '4',
    name: 'KARATE ZEON 50 CS',
    registryNumber: 'nº 2899',
    colorTag: 'blue',
    mapaRegistry: '2899 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '05/04/2024',
    activeIngredients: ['LAMBDA-CIALOTRINA'],
    chemicalGroups: ['PIRETROIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe II - Altamente tóxico',
    concentration: '50 g/L',
    formulation: 'Suspensão de Cápsula (CS)',
    actionMode: 'Contato e ingestão',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
  {
    id: '5',
    name: 'SCORE 250 EC',
    registryNumber: 'nº 1795',
    colorTag: 'red',
    mapaRegistry: '1795 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '18/03/2024',
    activeIngredients: ['DIFENOCONAZOL'],
    chemicalGroups: ['TRIAZOL'],
    actionClass: 'Fungicida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '250 g/L',
    formulation: 'Concentrado Emulsionável (EC)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '6',
    name: 'CONNECT',
    registryNumber: 'nº 7612',
    colorTag: 'green',
    mapaRegistry: '7612 - MAPA',
    holder: 'BAYER S.A.',
    lastRevision: '28/02/2024',
    activeIngredients: ['BETA-CIFLUTRINA', 'IMIDACLOPRIDO'],
    chemicalGroups: ['PIRETROIDE', 'NEONICOTINOIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe II - Altamente tóxico',
    concentration: '100 g/L + 700 g/L',
    formulation: 'Suspensão Concentrada (SC)',
    actionMode: 'Contato, ingestão e sistêmico',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
]

const filteredProducts = computed(() => {
  return mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    product.registryNumber.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const getColorClass = (color: 'blue' | 'red' | 'green'): string => {
  switch (color) {
    case 'blue':
      return 'bg-blue-500'
    case 'red':
      return 'bg-red-500'
    case 'green':
      return 'bg-emerald-500'
  }
}

const selectProduct = (product: Product) => {
  // Navegar para a tela do produto
  router.push(`/product/${product.id}`)
}
</script>