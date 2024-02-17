import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/infra/views/DashboardView.vue'

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
      component: () => import('@/infra/views/ShowDetailsView.vue')
    }
  ]
})

export default router
