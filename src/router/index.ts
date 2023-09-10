import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

//const baseURL = import.meta.env.BASE_URL
const baseURL = '/'

const router = createRouter({
  history: createWebHistory(baseURL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

export default router
