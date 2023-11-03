// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "../views/dashboard.vue"

const routes = [
  {
    path: '/',
    component:Dashboard,

  },
//   {
//     path: '/:pathMatch(.*)*',
//     component: () => import('@/views/pages/Error404.vue')
//   }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes
})


export default router
