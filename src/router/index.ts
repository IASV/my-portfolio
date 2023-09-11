import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

//const baseURL = import.meta.env.BASE_URL
const baseURL = '/my-portfolio'

const router = createRouter({
  history: createWebHistory(baseURL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
  ]
})

export default router
