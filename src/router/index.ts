import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/src/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/shows/:id',
      name: 'show-details',
      component: () => import('@/src/views/ShowDetailsView.vue')
    }
  ]
})

export default router
