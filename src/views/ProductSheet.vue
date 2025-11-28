<template>
  <main class="pt-16 pb-6 px-4">
    <div class="max-w-md mx-auto">
      <!-- Cabeçalho do Produto -->
      <div class="mb-6 pt-4">
        <h2 class="text-gray-900 mb-3">{{ product.name }}</h2>
        <div class="space-y-1">
          <p class="text-gray-600 text-sm">
            <span class="text-gray-900">Registro MAPA:</span> {{ product.mapaRegistry }}
          </p>
          <p class="text-gray-600 text-sm">
            <span class="text-gray-900">Titular:</span> {{ product.holder }}
          </p>
          <p class="text-gray-600 text-sm">
            <span class="text-gray-900">Última revisão:</span> {{ product.lastRevision }}
          </p>
        </div>
      </div>

      <!-- Abas de Navegação -->
      <div class="mb-4 overflow-x-auto">
        <div class="flex gap-2 pb-2">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="flex-shrink-0 px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
            :class="[
              activeTab === tab.id
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Conteúdo da Aba Ativa -->
      <div v-if="activeTab === 'geral'" class="space-y-3 mb-6">
        <!-- Ingredientes Ativos -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Ingredientes Ativos</h3>
          <div class="space-y-1">
            <p v-for="ingredient in product.activeIngredients" :key="ingredient" class="text-gray-700">
              {{ ingredient }}
            </p>
          </div>
        </div>

        <!-- Grupos Químicos -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Grupos Químicos</h3>
          <div class="space-y-1">
            <p v-for="group in product.chemicalGroups" :key="group" class="text-gray-700">
              {{ group }}
            </p>
          </div>
        </div>

        <!-- Classe de Ação -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Classe de Ação</h3>
          <p class="text-gray-700">{{ product.actionClass }}</p>
        </div>

        <!-- Classe Toxicológica -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Classe Toxicológica</h3>
          <p class="text-gray-700">{{ product.toxicologicalClass }}</p>
        </div>

        <!-- Concentração -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Concentração</h3>
          <p class="text-gray-700">{{ product.concentration }}</p>
        </div>

        <!-- Formulação -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Formulação</h3>
          <p class="text-gray-700">{{ product.formulation }}</p>
        </div>

        <!-- Modo de Ação -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Modo de Ação</h3>
          <p class="text-gray-700">{{ product.actionMode }}</p>
        </div>

        <!-- Classe Ambiental -->
        <div class="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <h3 class="text-gray-900 mb-2 text-sm">Classe Ambiental</h3>
          <p class="text-gray-700">{{ product.environmentalClass }}</p>
        </div>
      </div>

      <div v-if="activeTab === 'cultura'" class="py-12 text-center">
        <p class="text-gray-500">Informações de aplicação por cultura em breve</p>
      </div>

      <div v-if="activeTab === 'indicacoes'" class="py-12 text-center">
        <p class="text-gray-500">Indicações de uso em breve</p>
      </div>

      <div v-if="activeTab === 'modalidades'" class="py-12 text-center">
        <p class="text-gray-500">Modalidades de aplicação em breve</p>
      </div>

      <div v-if="activeTab === 'restricoes'" class="py-12 text-center">
        <p class="text-gray-500">Restrições por estado em breve</p>
      </div>

      <div v-if="activeTab === 'adicionais'" class="py-12 text-center">
        <p class="text-gray-500">Informações adicionais em breve</p>
      </div>

      <!-- Botões de Ação -->
      <div class="space-y-3 sticky bottom-0 bg-gray-50 py-4">
        <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-10 rounded-lg px-4 font-medium transition-colors flex items-center justify-center">
          <Printer class="w-4 h-4 mr-2" />
          Imprimir Ficha
        </button>
        
        <button class="w-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50 h-10 rounded-lg px-4 font-medium transition-colors flex items-center justify-center">
          <FileText class="w-4 h-4 mr-2" />
          Imprimir Várias Fichas
        </button>
        
        <button class="w-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50 h-10 rounded-lg px-4 font-medium transition-colors flex items-center justify-center">
          <BarChart3 class="w-4 h-4 mr-2" />
          Relatório do Produto
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Printer, FileText, BarChart3 } from 'lucide-vue-next'
import type { Product } from '@/types'

const route = useRoute()

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

const product = computed(() => {
  const productId = route.params.id as string
  return mockProducts.find(p => p.id === productId) || mockProducts[0]
})

type Tab = 'geral' | 'cultura' | 'indicacoes' | 'modalidades' | 'restricoes' | 'adicionais'

const activeTab = ref<Tab>('geral')

const tabs = [
  { id: 'geral' as const, label: 'Informações Gerais' },
  { id: 'cultura' as const, label: 'Aplicação por Cultura' },
  { id: 'indicacoes' as const, label: 'Indicações' },
  { id: 'modalidades' as const, label: 'Modalidades de Aplicação' },
  { id: 'restricoes' as const, label: 'Restrições por Estado' },
  { id: 'adicionais' as const, label: 'Informações Adicionais' },
]
</script>