<template>
  <main class="receitas-container">
      <!-- Botão Nova Receita -->
      <button 
        @click="navigateToNewReceita"
        class="nova-receita-btn"
      >
        + Nova Receita
      </button>

      <!-- Filtros -->
      <div class="filtros-container">
        <div class="filtros-grid">
          <div class="input-with-icon">
            <Calendar class="icon" />
            <input
              type="date"
              placeholder="Data inicial"
              class="form-input form-input-with-icon"
            />
          </div>
          <div class="input-with-icon">
            <Calendar class="icon" />
            <input
              type="date"
              placeholder="Data final"
              class="form-input form-input-with-icon"
            />
          </div>
        </div>

        <select 
          v-model="selectedStatus"
          class="form-select"
        >
          <option value="">Selecionar...</option>
          <option value="rascunho">Rascunhos</option>
          <option value="finalizada">Finalizadas</option>
          <option value="cancelada">Canceladas</option>
        </select>

        <div class="input-with-icon">
          <Search class="icon" />
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Buscar receita..."
            class="form-input form-input-with-icon"
          />
        </div>
      </div>

      <!-- Cards de Status -->
      <div class="status-grid">
        <div class="status-card rascunhos">
          <span class="status-card-number">{{ statusCounts.rascunhos }}</span>
          <p class="status-card-label">Rascunhos</p>
        </div>
        <div class="status-card finalizadas">
          <span class="status-card-number">{{ statusCounts.finalizadas }}</span>
          <p class="status-card-label">Finalizadas</p>
        </div>
        <div class="status-card canceladas">
          <span class="status-card-number">{{ statusCounts.canceladas }}</span>
          <p class="status-card-label">Canceladas</p>
        </div>
      </div>

      <!-- Lista de Receitas -->
      <div class="receitas-list">
        <div 
          v-for="receita in mockReceitas" 
          :key="receita.id"
          class="receita-card"
        >
          <!-- Header -->
          <div class="receita-header">
            <div>
              <h3 class="receita-titulo">Receita {{ receita.numero }}</h3>
              <p class="receita-data">{{ receita.data }}</p>
            </div>
            <div 
              class="status-indicator"
              :class="receita.status"
            />
          </div>

          <!-- Informações -->
          <div class="receita-info">
            <div class="receita-info-item">
              <p class="receita-info-label">Cliente</p>
              <p class="receita-info-value">{{ receita.cliente }}</p>
            </div>
            <div class="receita-info-item">
              <p class="receita-info-label">Responsável Técnico</p>
              <p class="receita-info-value">{{ receita.responsavelTecnico }}</p>
            </div>
            <div class="receita-info-item">
              <p class="receita-info-label">Envio</p>
              <p class="receita-info-value">{{ receita.envio }}</p>
            </div>
          </div>

          <!-- Ações -->
          <div class="receita-actions">
            <button class="receita-action-btn">
              <Eye />
              Visualizar
            </button>
            <button class="receita-action-btn">
              <Edit />
              Editar
            </button>
            <button class="receita-action-btn icon-only">
              <Settings />
            </button>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
import { Search, Calendar, Settings, Eye, Edit } from 'lucide-vue'

export default {
  name: 'Receitas',
  components: {
    Search,
    Calendar,
    Settings,
    Eye,
    Edit
  },
  data() {
    return {
      searchTerm: '',
      selectedStatus: '',
      mockReceitas: [
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
    }
  },
  computed: {
    statusCounts() {
      return {
        rascunhos: this.mockReceitas.filter(r => r.status === 'rascunho').length,
        finalizadas: this.mockReceitas.filter(r => r.status === 'finalizada').length,
        canceladas: this.mockReceitas.filter(r => r.status === 'cancelada').length,
      }
    }
  },
  methods: {
    navigateToNewReceita() {
      this.$router.push('/receitas/nova')
    }
  }
}
</script>