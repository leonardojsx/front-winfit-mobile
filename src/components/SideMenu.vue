<template>
  <div class="flex flex-col h-full bg-white">
    <!-- Header do Menu -->
    <div class="bg-emerald-700 p-6">
      <h2 class="text-white font-semibold">WINFIT</h2>
      <p class="text-emerald-100 text-sm">AgroRevenda</p>
    </div>

    <!-- Itens do Menu -->
    <nav class="flex-1 overflow-y-auto py-2">
      <router-link
        v-for="item in menuItems"
        :key="item.label"
        :to="item.route || '#'"
        @click="handleItemClick(item.route)"
        class="w-full flex items-center gap-3 px-6 py-3.5 transition-colors hover:bg-gray-50"
        :class="[
          item.active ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-700' : 'text-gray-700'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span>{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- Botão Sair -->
    <div class="border-t border-gray-200">
      <button
        @click="$emit('close')"
        class="w-full flex items-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50 transition-colors"
      >
        <LogOut class="w-5 h-5" />
        <span>Sair</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { 
  Home, 
  Book, 
  Zap, 
  FileText, 
  ShoppingBag, 
  ClipboardList,
  FolderOpen,
  Package,
  Warehouse,
  DollarSign,
  FileOutput,
  Wallet,
  BarChart3,
  LogOut
} from 'lucide-vue-next'

const router = useRouter()

const emit = defineEmits<{
  close: []
}>()

const menuItems = [
  { icon: Home, label: 'Início', route: '/', active: false },
  { icon: Book, label: 'Compêndio', route: '/compendio', active: false },
  { icon: Zap, label: 'Ações', route: null },
  { icon: FileText, label: 'Receituário Agronômico', route: '/receitas' },
  { icon: ShoppingBag, label: 'Pedido Simples', route: null },
  { icon: ClipboardList, label: 'Pedido Completo', route: null },
  { icon: FolderOpen, label: 'Cadastros', route: null },
  { icon: Package, label: 'Compras', route: null },
  { icon: Warehouse, label: 'Controle de Estoque', route: null },
  { icon: DollarSign, label: 'Financeiro', route: null },
  { icon: FileOutput, label: 'Emissão Fiscal', route: null },
  { icon: Wallet, label: 'Caixa', route: null },
  { icon: BarChart3, label: 'Relatórios', route: null },
]

const handleItemClick = (route: string | null) => {
  if (route) {
    router.push(route)
    emit('close')
  }
}
</script>