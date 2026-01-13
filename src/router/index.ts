import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import MyBillsPrivacyPolicy from '@/views/MyBillsPrivacyPolicy.vue'

//const baseURL = import.meta.env.BASE_URL
const baseURL = '/'

const router = createRouter({
  history: createWebHistory(baseURL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/my-bills-privacy-policy',
      name: 'my-bills-privacy-policy',
      component: MyBillsPrivacyPolicy
    },
  ]
})

export default router
