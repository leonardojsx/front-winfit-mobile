<template>
  <div class="metric-card">
    <div class="metric-header">
      <div :class="`metric-icon ${color}`">
        <component :is="iconComponent" class="metric-icon-svg" />
      </div>
      <div class="metric-info">
        <h3 class="metric-title">{{ title }}</h3>
        <p v-if="period" class="metric-period">{{ period }}</p>
      </div>
      <div v-if="trending" class="metric-trending">
        <TrendingUpIcon class="trending-icon" />
      </div>
    </div>

    <div class="metric-value-container">
      <p class="metric-value-text">{{ value }}</p>
    </div>

    <div class="metric-footer">
      <p class="metric-subtitle">{{ subtitle }}</p>
      <div v-if="showGrowth" class="metric-growth">
        <ArrowUpRightIcon class="growth-icon" />
        +15
      </div>
    </div>
  </div>
</template>

<script>
import { TrendingUp, ArrowUpRight, FileText, Receipt, Users } from 'lucide-vue'

export default {
  name: 'MetricCard',
  components: {
    TrendingUpIcon: TrendingUp,
    ArrowUpRightIcon: ArrowUpRight,
    FileTextIcon: FileText,
    ReceiptIcon: Receipt,
    UsersIcon: Users
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true,
      validator: value => ['green', 'blue', 'orange'].includes(value)
    },
    compact: {
      type: Boolean,
      default: false
    },
    trending: {
      type: Boolean,
      default: false
    },
    showGrowth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconComponent() {
      return this.icon
    }
  }
}
</script>