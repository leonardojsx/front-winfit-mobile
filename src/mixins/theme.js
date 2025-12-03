export default {
  computed: {
    isDark() {
      return this.$store.getters.isDark
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('toggleTheme')
    }
  },
  mounted() {
    this.$store.dispatch('initializeTheme')
  }
}