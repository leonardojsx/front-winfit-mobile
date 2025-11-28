import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Compendio from '@/views/Compendio.vue'
import Receitas from '@/views/Receitas.vue'
import NovaReceita from '@/views/NovaReceita.vue'
import ProductSheet from '@/views/ProductSheet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/compendio',
      name: 'compendio',
      component: Compendio
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductSheet,
      props: true
    },
    {
      path: '/receitas',
      name: 'receitas',
      component: Receitas
    },
    {
      path: '/receitas/nova',
      name: 'nova-receita',
      component: NovaReceita
    }
  ]
})

export default router