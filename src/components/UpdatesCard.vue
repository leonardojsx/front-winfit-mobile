<template>
  <div class="bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300">
    <div class="p-6">
      <div class="flex items-center gap-3 mb-5">
        <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-2.5 rounded-xl">
          <Clock class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 font-semibold">Últimas Atualizações</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">Atividade recente do sistema</p>
        </div>
      </div>

      <div class="h-80 overflow-y-auto -mx-6">
        <div class="px-6 space-y-3">
          <div
            v-for="(update, index) in updates"
            :key="update.id"
            class="relative p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-750 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-emerald-200 dark:hover:border-emerald-500 hover:shadow-sm transition-all duration-200 cursor-pointer group"
          >
            <!-- Indicador de status -->
            <div :class="getStatusColor(index)" class="absolute left-0 top-4 w-1 h-12 rounded-full"></div>
            
            <div class="ml-4">
              <div class="flex items-start justify-between mb-2">
                <p class="text-gray-900 dark:text-gray-100 text-sm font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {{ update.title }}
                </p>
                <div class="flex flex-col items-end">
                  <span class="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                    {{ update.time }}
                  </span>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-2 leading-relaxed">{{ update.description }}</p>
              <div class="flex items-center justify-between">
                <p class="text-gray-400 dark:text-gray-500 text-xs flex items-center gap-1">
                  <Calendar class="w-3 h-3" />
                  {{ update.date }}
                </p>
                <div v-if="index < 2" class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs px-2 py-1 rounded-full font-medium">
                  Novo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, Calendar } from 'lucide-vue-next'

const updates = [
  {
    id: 1,
    date: '28/11/2025',
    time: '14:32',
    title: 'Nova venda registrada',
    description: 'Pedido #1847 - Cliente: Fazenda São José',
  },
  {
    id: 2,
    date: '28/11/2025',
    time: '11:15',
    title: 'Receita agronômica emitida',
    description: 'Receita #445 - Eng. Agr. João Silva',
  },
  {
    id: 3,
    date: '28/11/2025',
    time: '09:23',
    title: 'Produto em estoque baixo',
    description: 'Herbicida XYZ - Apenas 12 unidades',
  },
  {
    id: 4,
    date: '27/11/2025',
    time: '16:47',
    title: 'Pagamento confirmado',
    description: 'NF #3421 - R$ 8.450,00',
  },
  {
    id: 5,
    date: '27/11/2025',
    time: '14:12',
    title: 'Novo cliente cadastrado',
    description: 'Sítio Boa Esperança - Viçosa/MG',
  },
]

const getStatusColor = (index: number) => {
  const colors = [
    'bg-emerald-500',
    'bg-blue-500', 
    'bg-orange-500',
    'bg-green-500',
    'bg-purple-500'
  ]
  return colors[index % colors.length]
}
</script>