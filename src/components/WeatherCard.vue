<template>
  <div 
    class="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-xl rounded-2xl cursor-pointer transition-all duration-300 ease-out overflow-hidden weather-card-mobile"
    :class="[
      expanded ? 'max-h-[450px]' : 'max-h-[88px]',
      { 'transform hover:scale-[1.02]': !expanded }
    ]"
    @click="toggleExpanded"
  >
    <!-- Padrão de fundo decorativo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
    </div>
    
    <div class="relative p-6">
      <!-- Conteúdo sempre presente -->
      <div>
        <!-- Cabeçalho Compacto -->
        <div 
          class="flex items-center justify-between transition-all duration-300 ease-in-out"
          :class="{ 'mb-0': !expanded, 'mb-6': expanded }"
        >
          <div class="flex items-center gap-3">
            <MapPin class="w-4 h-4 text-white/80" />
            <div>
              <h3 class="text-white text-base font-medium">Viçosa, MG</h3>
              <p class="text-white/70 text-sm capitalize">{{ formattedDate }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="relative">
              <Cloud 
                class="text-white/90 transition-all duration-300"
                :class="expanded ? 'w-14 h-14 drop-shadow-sm' : 'w-8 h-8'"
              />
              <div 
                v-if="expanded" 
                class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse transition-opacity duration-300"
              />
            </div>
            <ChevronDown 
              class="w-4 h-4 text-white/70 transition-all duration-300" 
              :class="{ 'rotate-180': expanded }"
            />
          </div>
        </div>

        <!-- Conteúdo Expandido -->
        <div 
          class="transition-all duration-250 ease-out"
          :class="{ 
            'max-h-0 opacity-0 overflow-hidden': !expanded,
            'max-h-[360px] opacity-100': expanded
          }"
          :style="{ transitionDelay: expanded ? '50ms' : '0ms' }"
        >
          <!-- Temperatura Principal -->
          <div 
            class="mb-6 pt-4 transition-all duration-200 ease-out transform"
            :class="{ 
              'opacity-100 translate-y-0': expanded, 
              'opacity-0 translate-y-3': !expanded 
            }"
            :style="{ transitionDelay: expanded ? '100ms' : '0ms' }"
          >
            <div class="flex items-baseline gap-3">
              <span class="text-6xl font-light tracking-tight">21°</span>
              <div class="flex flex-col">
                <span class="text-white/80 text-lg">C</span>
                <span class="text-white/70 text-sm">Sensação: 23°</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <p class="text-white/90 text-lg">Nublado</p>
              <div class="flex text-white/70">
                <span class="text-sm">H: 28°</span>
                <span class="mx-2">•</span>
                <span class="text-sm">L: 18°</span>
              </div>
            </div>
          </div>

          <!-- Informações Adicionais -->
          <div 
            class="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 transition-all duration-250 ease-out transform"
            :class="{ 
              'opacity-100 translate-y-0': expanded, 
              'opacity-0 translate-y-3': !expanded 
            }"
            :style="{ transitionDelay: expanded ? '150ms' : '0ms' }"
          >
            <div class="text-center group">
              <Thermometer class="w-5 h-5 text-white/70 mx-auto mb-2 group-hover:text-white transition-colors duration-200" />
              <p class="text-white/70 text-xs mb-1">Máxima</p>
              <p class="text-white font-semibold">28°</p>
            </div>
            <div class="text-center group">
              <Wind class="w-5 h-5 text-white/70 mx-auto mb-2 group-hover:text-white transition-colors duration-200" />
              <p class="text-white/70 text-xs mb-1">Vento</p>
              <p class="text-white font-semibold">12 km/h</p>
            </div>
            <div class="text-center group">
              <Droplets class="w-5 h-5 text-white/70 mx-auto mb-2 group-hover:text-white transition-colors duration-200" />
              <p class="text-white/70 text-xs mb-1">Umidade</p>
              <p class="text-white font-semibold">68%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Cloud, Wind, Droplets, MapPin, Thermometer, ChevronDown } from 'lucide-vue-next'

const expanded = ref(false)

const toggleExpanded = () => {
  expanded.value = !expanded.value
}

const formattedDate = computed(() => {
  const today = new Date()
  return today.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  })
})
</script>