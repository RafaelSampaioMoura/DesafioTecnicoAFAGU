import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'
import FavoriteCities from '../views/FavoriteCities.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clima/:estado/:cidade',
      name: 'cityView',
      component: CityView
    },
    {
      path: '/favoritos',
      name: 'favoritosView',
      component: FavoriteCities
    }
  ]
})

export default router
