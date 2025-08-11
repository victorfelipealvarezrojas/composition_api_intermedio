import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/list`,
      name: 'pokemon-list',
      props: { title: 'List of Pokémons', name: 'pokemon-list' },
      component: () => import('@/pokemons/pages/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/by/:id`,
      name: 'pokemon-id',
      props: { title: 'Pokémon by ID', name: 'pokemon-id' },
      component: () => import('@/pokemons/pages/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: 'pokemon-search',
      props: { title: 'Search a Pokémon', name: 'pokemon-search' },
      component: () => import('@/pokemons/pages/PokemonSearch.vue'),
    },
  ],
}
