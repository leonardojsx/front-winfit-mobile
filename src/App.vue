<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <MobileHeader />
    <router-view />
  </div>
</template>

<script>
import MobileHeader from '@/components/MobileHeader.vue'

export default {
  name: 'App',
  components: {
    MobileHeader
  },
  mounted() {
    this.$store.dispatch('initializeTheme')
  }
}
</script>
