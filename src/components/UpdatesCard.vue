<template>
  <div class="updates-card">
    <div class="updates-header">
      <div class="updates-icon">
        <ClockIcon style="width: 20px; height: 20px;" />
      </div>
      <div>
        <h3>Últimas Atualizações</h3>
        <p>Atividade recente do sistema</p>
      </div>
    </div>

    <div class="updates-content">
          <div
            v-for="(update, index) in updates"
            :key="update.id"
            class="update-item"
          >
            <div class="update-header">
              <p class="update-title">{{ update.title }}</p>
              <span class="update-time">{{ update.time }}</span>
            </div>
            <p class="update-description">{{ update.description }}</p>
            <div class="update-footer">
              <p class="update-date">
                <CalendarIcon style="width: 12px; height: 12px;" />
                {{ update.date }}
              </p>
              <div v-if="index < 2" class="new-badge">
                Novo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Clock, Calendar } from 'lucide-vue'

export default {
  name: 'UpdatesCard',
  components: {
    ClockIcon: Clock,
    CalendarIcon: Calendar
  },
  data() {
    return {
      updates: [
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
    }
  },
  methods: {
    getStatusColor(index) {
      const colors = [
        'bg-emerald-500',
        'bg-blue-500', 
        'bg-orange-500',
        'bg-green-500',
        'bg-purple-500'
      ]
      return colors[index % colors.length]
    }
  }
}
</script>