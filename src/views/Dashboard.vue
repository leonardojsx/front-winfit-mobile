<template>
  <main class="dashboard-container">
    <!-- Card Previsão do Tempo -->
    <div>
      <WeatherCard />
    </div>

    <!-- Grid de Métricas Principais -->
    <div class="metrics-grid">
      <div>
        <MetricCard
          icon="TrendingUpIcon"
          title="Volume de Vendas"
          period="Mês"
          value="R$ 248.750"
          subtitle="Restam 2 dias"
          color="green"
          :compact="true"
        />
      </div>
      <div>
        <MetricCard
          icon="FileTextIcon"
          title="Receitas Emitidas"
          period="Mês"
          value="127"
          subtitle="Receitas agronômicas"
          color="blue"
          :compact="true"
        />
      </div>
    </div>

    <!-- Cards Secundários -->
    <div class="secondary-cards">
      <div>
        <MetricCard
          icon="ReceiptIcon"
          title="Emissões Fiscais"
          period="Mês"
          value="184"
          subtitle="+12% em relação ao mês anterior"
          color="orange"
          :trending="true"
        />
      </div>

      <div>
        <MetricCard
          icon="UsersIcon"
          title="Clientes Ativos"
          period="Total"
          value="342"
          subtitle="15 novos clientes este mês"
          color="green"
          :showGrowth="true"
        />
      </div>
    </div>

    <!-- Card Últimas Atualizações -->
    <div class="animate-slide-up" style="animation-delay: 0.6s">
      <UpdatesCard />
    </div>
  </main>
</template>

<script>
import WeatherCard from '@/components/WeatherCard.vue'
import MetricCard from '@/components/MetricCard.vue'
import UpdatesCard from '@/components/UpdatesCard.vue'

export default {
  name: 'Dashboard',
  components: {
    WeatherCard,
    MetricCard,
    UpdatesCard
  }
}
</script>