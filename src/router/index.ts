import { pokemonRoute } from '@/pokemons/router'
import AboutView from '@/shared/views/AboutView.vue'
import HomeView from '@/shared/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/counter/views/CounterView.vue'),
    },
    {
      ...pokemonRoute, // path is pokemons
      name: 'pokemons',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        return { name: 'home' }
      },
    },
  ],
})

export default router
