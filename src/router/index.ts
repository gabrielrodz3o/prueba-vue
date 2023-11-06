// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "../views/Dashboard.vue"
import ShoppingCartVue from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    component:Dashboard,

  },
  {
    path: '/cart',
    component:ShoppingCartVue,

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
