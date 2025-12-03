<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :style="{
      background: isDark ? '#374151' : 'white',
      color: isDark ? '#fbbf24' : '#6b7280'
    }"
  >
    <SunIcon v-if="isDark" style="width: 20px; height: 20px;" />
    <MoonIcon v-else style="width: 20px; height: 20px;" />
  </button>
</template>

<script>
import { Sun, Moon } from 'lucide-vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ThemeToggle',
  components: {
    SunIcon: Sun,
    MoonIcon: Moon
  },
  computed: {
    ...mapGetters(['isDark'])
  },
  methods: {
    ...mapActions(['toggleTheme'])
  }
}
</script>