<template>
  <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg rounded-lg">
    <div class="p-5">
      <!-- Cabeçalho -->
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-white/90 text-sm mb-1">Viçosa, MG</h3>
          <p class="text-white/70 text-xs capitalize">{{ formattedDate }}</p>
        </div>
        <Cloud class="w-12 h-12 text-white/80" />
      </div>

      <!-- Temperatura Principal -->
      <div class="mb-4">
        <div class="flex items-baseline gap-2">
          <span class="text-5xl">21°</span>
          <span class="text-white/80">C</span>
        </div>
        <p class="text-white/90 mt-1">Nublado</p>
      </div>

      <!-- Informações Adicionais -->
      <div class="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
        <div class="text-center">
          <p class="text-white/70 text-xs mb-1">Máxima</p>
          <p class="text-white">28°</p>
        </div>
        <div class="flex flex-col items-center">
          <Wind class="w-4 h-4 text-white/70 mb-1" />
          <p class="text-white/70 text-xs mb-1">Vento</p>
          <p class="text-white">12 km/h</p>
        </div>
        <div class="flex flex-col items-center">
          <Droplets class="w-4 h-4 text-white/70 mb-1" />
          <p class="text-white/70 text-xs mb-1">Umidade</p>
          <p class="text-white">68%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Cloud, Wind, Droplets } from 'lucide-vue-next'

const formattedDate = computed(() => {
  const today = new Date()
  return today.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  })
})
</script>