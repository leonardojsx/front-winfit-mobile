<template>
  <main class="pt-16 pb-6 px-4">
    <div class="max-w-md mx-auto space-y-4">
      <!-- Card Previsão do Tempo - Destaque -->
      <WeatherCard />

      <!-- Cards de Métricas -->
      <MetricCard
        :icon="TrendingUp"
        title="Volume de Vendas"
        period="Mês"
        value="R$ 248.750,00"
        subtitle="Restam 2 dias para o final do mês"
        color="green"
      />

      <MetricCard
        :icon="FileText"
        title="Receitas Emitidas"
        period="Mês"
        value="127"
        subtitle="Receitas agronômicas no período"
        color="green"
      />

      <MetricCard
        :icon="Receipt"
        title="Emissões Fiscais"
        period="Mês"
        value="184"
        subtitle="+12% em relação ao mês anterior"
        color="green"
      />

      <MetricCard
        :icon="Users"
        title="Clientes Ativos"
        period=""
        value="342"
        subtitle="15 novos clientes este mês"
        color="green"
      />

      <!-- Card Últimas Atualizações -->
      <UpdatesCard />
    </div>
  </main>
</template>

<script setup lang="ts">
import WeatherCard from '@/components/WeatherCard.vue'
import MetricCard from '@/components/MetricCard.vue'
import UpdatesCard from '@/components/UpdatesCard.vue'
import { TrendingUp, FileText, Receipt, Users } from 'lucide-vue-next'
</script>