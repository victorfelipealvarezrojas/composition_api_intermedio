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
      props: { title: 'List of Pokémons', name: 'pokemon-list', isView: true },
      component: () => import('@/pokemons/pages/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/list-native`,
      name: 'pokemon-list-native',
      props: { title: 'List of Pokémons Native', name: 'pokemon-list-native', isView: true },
      component: () => import('@/pokemons/pages/PokemonListNative.vue'),
    },
    {
      path: `/${ROUTE_NAME}/by/:id`,
      name: 'pokemon-id',
      props: { title: 'Pokémon by ID', name: 'pokemon-id', isView: false },
      component: () => import('@/pokemons/pages/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: 'pokemon-search',
      props: { title: 'Search a Pokémon', name: 'pokemon-search', isView: true },
      component: () => import('@/pokemons/pages/PokemonSearch.vue'),
    },
  ],
}
