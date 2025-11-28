<template>
  <main class="pt-20 pb-8 px-4 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 min-h-screen">
    <div class="max-w-md mx-auto">
      <!-- Grid de Cards Principal -->
      <div class="space-y-6">
        <!-- Card Previsão do Tempo - Destaque -->
        <div class="animate-slide-up" style="animation-delay: 0.1s">
          <WeatherCard />
        </div>

        <!-- Grid de Métricas Principais -->
        <div class="grid grid-cols-2 gap-3">
          <div class="animate-slide-up" style="animation-delay: 0.2s">
            <MetricCard
              :icon="TrendingUp"
              title="Volume de Vendas"
              period="Mês"
              value="R$ 248.750"
              subtitle="Restam 2 dias"
              color="green"
              :compact="true"
            />
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.3s">
            <MetricCard
              :icon="FileText"
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
        <div class="space-y-3">
          <div class="animate-slide-up" style="animation-delay: 0.4s">
            <MetricCard
              :icon="Receipt"
              title="Emissões Fiscais"
              period="Mês"
              value="184"
              subtitle="+12% em relação ao mês anterior"
              color="orange"
              :trending="true"
            />
          </div>

          <div class="animate-slide-up" style="animation-delay: 0.5s">
            <MetricCard
              :icon="Users"
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
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import WeatherCard from '@/components/WeatherCard.vue'
import MetricCard from '@/components/MetricCard.vue'
import UpdatesCard from '@/components/UpdatesCard.vue'
import { TrendingUp, FileText, Receipt, Users } from 'lucide-vue-next'
</script>