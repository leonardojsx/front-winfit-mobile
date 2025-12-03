import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Compendio from '@/views/Compendio.vue'
import Receitas from '@/views/Receitas.vue'
import NovaReceita from '@/views/NovaReceita.vue'
import ProductSheet from '@/views/ProductSheet.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/front-winfit-mobile/',
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