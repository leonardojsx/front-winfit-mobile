<template>
  <div 
    class="weather-card"
    @click="toggleExpanded"
  >
    <!-- Cabeçalho sempre visível -->
    <div class="weather-header">
      <div class="weather-location">
        <MapPinIcon style="width: 16px; height: 16px; opacity: 0.8;" />
        <div>
          <h3>Viçosa, MG</h3>
          <p>{{ formattedDate }}</p>
        </div>
      </div>
      <div class="weather-icon">
        <CloudIcon style="width: 32px; height: 32px; opacity: 0.9;" />
        <ChevronDownIcon 
          style="width: 16px; height: 16px; opacity: 0.7; transition: transform 0.3s;" 
          :style="{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }"
        />
      </div>
    </div>

    <!-- Conteúdo que expande/contrai -->
    <div 
      class="weather-expanded-content"
      :class="expanded ? 'expanded' : 'collapsed'"
    >
      <!-- Temperatura Principal -->
      <div class="weather-temperature">
        <div style="display: flex; align-items: baseline; gap: 12px;">
          <span style="font-size: 48px; font-weight: 300; line-height: 1;">21°</span>
          <div>
            <span style="opacity: 0.8; font-size: 18px;">C</span>
            <p style="margin: 0; opacity: 0.7; font-size: 14px;">Sensação: 23°</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
          <p style="margin: 0; opacity: 0.9; font-size: 18px;">Nublado</p>
          <div style="display: flex; opacity: 0.7;">
            <span style="font-size: 14px;">H: 28°</span>
            <span style="margin: 0 8px;">•</span>
            <span style="font-size: 14px;">L: 18°</span>
          </div>
        </div>
      </div>

      <!-- Detalhes do clima -->
      <div class="weather-details">
        <div class="weather-details-grid">
          <div class="weather-detail-item">
            <ThermometerIcon style="width: 20px; height: 20px; opacity: 0.7; margin: 0 auto 8px;" />
            <p class="weather-detail-label">Máxima</p>
            <p class="weather-detail-value">28°</p>
          </div>
          <div class="weather-detail-item">
            <WindIcon style="width: 20px; height: 20px; opacity: 0.7; margin: 0 auto 8px;" />
            <p class="weather-detail-label">Vento</p>
            <p class="weather-detail-value">12 km/h</p>
          </div>
          <div class="weather-detail-item">
            <DropletsIcon style="width: 20px; height: 20px; opacity: 0.7; margin: 0 auto 8px;" />
            <p class="weather-detail-label">Umidade</p>
            <p class="weather-detail-value">68%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Cloud, Wind, Droplets, MapPin, Thermometer, ChevronDown } from 'lucide-vue'

export default {
  name: 'WeatherCard',
  components: {
    CloudIcon: Cloud,
    WindIcon: Wind,
    DropletsIcon: Droplets,
    MapPinIcon: MapPin,
    ThermometerIcon: Thermometer,
    ChevronDownIcon: ChevronDown
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    formattedDate() {
      const today = new Date()
      return today.toLocaleDateString('pt-BR', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long' 
      })
    }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded
    }
  }
}
</script>