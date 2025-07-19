import { createRouter, createWebHistory } from 'vue-router'
import ContactosList from '../views/ContactosList.vue'

const routes = [
  {
    path: '/',
    name: 'Contactos',
    component: ContactosList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
