<template>
  <main class="pt-16 pb-6 px-4">
    <div class="max-w-md mx-auto">
      <!-- Botão Nova Receita -->
      <div class="pt-4 mb-4">
        <button 
          @click="navigateToNewReceita"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors"
        >
          + Nova Receita
        </button>
      </div>

      <!-- Filtros -->
      <div class="space-y-3 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div class="relative">
            <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="date"
              placeholder="Data inicial"
              class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <div class="relative">
            <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="date"
              placeholder="Data final"
              class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        <select 
          v-model="selectedStatus"
          class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        >
          <option value="">Selecionar...</option>
          <option value="rascunho">Rascunhos</option>
          <option value="finalizada">Finalizadas</option>
          <option value="cancelada">Canceladas</option>
        </select>

        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Buscar receita..."
            class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      <!-- Cards de Status -->
      <div class="grid grid-cols-3 gap-3 mb-4">
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <div class="text-2xl text-gray-900 mb-1">{{ statusCounts.rascunhos }}</div>
          <p class="text-xs text-gray-600">Rascunhos</p>
        </div>
        <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
          <div class="text-2xl text-gray-900 mb-1">{{ statusCounts.finalizadas }}</div>
          <p class="text-xs text-gray-600">Finalizadas</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div class="text-2xl text-gray-900 mb-1">{{ statusCounts.canceladas }}</div>
          <p class="text-xs text-gray-600">Canceladas</p>
        </div>
      </div>

      <!-- Lista de Receitas -->
      <div class="space-y-3">
        <div 
          v-for="receita in mockReceitas" 
          :key="receita.id"
          class="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg"
        >
          <div class="p-4">
            <!-- Header -->
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-gray-900 mb-1">Receita {{ receita.numero }}</h3>
                <p class="text-gray-600 text-sm">{{ receita.data }}</p>
              </div>
              <div 
                class="w-3 h-3 rounded-full"
                :class="getStatusColor(receita.status)"
              />
            </div>

            <!-- Informações -->
            <div class="space-y-2 mb-4">
              <div>
                <p class="text-xs text-gray-500">Cliente</p>
                <p class="text-sm text-gray-900">{{ receita.cliente }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Responsável Técnico</p>
                <p class="text-sm text-gray-900">{{ receita.responsavelTecnico }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Envio</p>
                <p class="text-sm text-gray-900">{{ receita.envio }}</p>
              </div>
            </div>

            <!-- Ações -->
            <div class="flex gap-2">
              <button class="flex-1 border border-gray-200 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                <Eye class="w-4 h-4" />
                Visualizar
              </button>
              <button class="flex-1 border border-gray-200 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                <Edit class="w-4 h-4" />
                Editar
              </button>
              <button class="border border-gray-200 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm">
                <Settings class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Calendar, Settings, Eye, Edit } from 'lucide-vue-next'

const router = useRouter()

interface Receita {
  id: string
  numero: string
  data: string
  cliente: string
  responsavelTecnico: string
  envio: string
  status: 'rascunho' | 'finalizada' | 'cancelada'
}

const searchTerm = ref('')
const selectedStatus = ref('')

const mockReceitas: Receita[] = [
  {
    id: '1',
    numero: '001/2025',
    data: '28/11/2025',
    cliente: 'Fazenda São José',
    responsavelTecnico: 'Eng. João Silva',
    envio: '28/11/2025',
    status: 'finalizada',
  },
  {
    id: '2',
    numero: '002/2025',
    data: '27/11/2025',
    cliente: 'Sítio Boa Esperança',
    responsavelTecnico: 'Eng. Maria Santos',
    envio: 'Não enviado',
    status: 'rascunho',
  },
  {
    id: '3',
    numero: '003/2025',
    data: '26/11/2025',
    cliente: 'Fazenda Santa Clara',
    responsavelTecnico: 'Eng. João Silva',
    envio: '26/11/2025',
    status: 'finalizada',
  },
  {
    id: '4',
    numero: '004/2025',
    data: '25/11/2025',
    cliente: 'Chácara Verde',
    responsavelTecnico: 'Eng. Carlos Oliveira',
    envio: 'Não enviado',
    status: 'rascunho',
  },
  {
    id: '5',
    numero: '005/2025',
    data: '24/11/2025',
    cliente: 'Fazenda Progresso',
    responsavelTecnico: 'Eng. Maria Santos',
    envio: '24/11/2025',
    status: 'cancelada',
  },
]

const statusCounts = computed(() => ({
  rascunhos: mockReceitas.filter(r => r.status === 'rascunho').length,
  finalizadas: mockReceitas.filter(r => r.status === 'finalizada').length,
  canceladas: mockReceitas.filter(r => r.status === 'cancelada').length,
}))

const getStatusColor = (status: Receita['status']) => {
  switch (status) {
    case 'rascunho':
      return 'bg-yellow-500'
    case 'finalizada':
      return 'bg-emerald-500'
    case 'cancelada':
      return 'bg-red-500'
  }
}

const navigateToNewReceita = () => {
  router.push('/receitas/nova')
}
</script>