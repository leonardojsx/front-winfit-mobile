<template>
  <div class="min-h-screen bg-gray-50">
    <MobileHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MobileHeader from '@/components/MobileHeader.vue'
</script>
