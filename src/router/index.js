import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact.vue'
import portfolio from '../views/portfolio.vue'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/about', name: 'about', component: about },
  { path: '/contact', name: 'contact', component: contact },
  { path: '/portfolio', name: 'portfolio', component: portfolio },
  // Запасной маршрут для несуществующих страниц
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router