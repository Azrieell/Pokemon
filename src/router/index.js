import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import TambahView from '../views/TambahView.vue'
import EvolutionView from '../views/EvolutionView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tambah',
      name: 'tambah',
      component: TambahView
    },
    {
      path: '/evolution',
      name: 'evolution',
      component: EvolutionView
    },
  ]
})

export default router
