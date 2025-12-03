<template>
  <div class="side-menu">
    <!-- Header do Menu -->
    <div class="menu-header">
      <h2>WINFIT</h2>
      <p>AgroRevenda</p>
    </div>

    <!-- Itens do Menu -->
    <nav class="menu-nav">
      <router-link
        v-for="item in menuItems"
        :key="item.label"
        :to="item.route || '#'"
        @click="handleItemClick(item.route)"
        class="menu-item"
        :class="{ 'active': $route.path === item.route }"
      >
        <component :is="item.icon" style="width: 20px; height: 20px;" />
        <span>{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- Botão Sair -->
    <div class="menu-footer">
      <button
        @click="$emit('close')"
        class="menu-logout"
      >
        <LogOutIcon style="width: 20px; height: 20px;" />
        <span>Sair</span>
      </button>
    </div>
  </div>
</template>

<script>
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
} from 'lucide-vue'

export default {
  name: 'SideMenu',
  components: {
    HomeIcon: Home,
    BookIcon: Book,
    ZapIcon: Zap,
    FileTextIcon: FileText,
    ShoppingBagIcon: ShoppingBag,
    ClipboardListIcon: ClipboardList,
    FolderOpenIcon: FolderOpen,
    PackageIcon: Package,
    WarehouseIcon: Warehouse,
    DollarSignIcon: DollarSign,
    FileOutputIcon: FileOutput,
    WalletIcon: Wallet,
    BarChart3Icon: BarChart3,
    LogOutIcon: LogOut
  },
  data() {
    return {
      menuItems: [
        { icon: 'HomeIcon', label: 'Início', route: '/', active: false },
        { icon: 'BookIcon', label: 'Compêndio', route: '/compendio', active: false },
        { icon: 'ZapIcon', label: 'Ações', route: null },
        { icon: 'FileTextIcon', label: 'Receituário Agronômico', route: '/receitas' },
        { icon: 'ShoppingBagIcon', label: 'Pedido Simples', route: null },
        { icon: 'ClipboardListIcon', label: 'Pedido Completo', route: null },
        { icon: 'FolderOpenIcon', label: 'Cadastros', route: null },
        { icon: 'PackageIcon', label: 'Compras', route: null },
        { icon: 'WarehouseIcon', label: 'Controle de Estoque', route: null },
        { icon: 'DollarSignIcon', label: 'Financeiro', route: null },
        { icon: 'FileOutputIcon', label: 'Emissão Fiscal', route: null },
        { icon: 'WalletIcon', label: 'Caixa', route: null },
        { icon: 'BarChart3Icon', label: 'Relatórios', route: null }
      ]
    }
  },
  methods: {
    handleItemClick(route) {
      if (route) {
        this.$router.push(route)
        this.$emit('close')
      }
    }
  }
}
</script>