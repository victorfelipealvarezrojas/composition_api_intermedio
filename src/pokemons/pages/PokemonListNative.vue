<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import CardList from '../components/CardList.vue'
import store from '../store/store'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

useQuery({
  queryKey: ['poke'], // comparte cache con PokemonList.vue porque usan la misma queryKey
  queryFn: () => getPokemons(),
  select: (data: Pokemon[]) => {
    store.loadedPokemons(data)
  },
})
</script>

<template>
  <h1>Pokemon List Native - {{ store.pokemons.const }}</h1>
  <h3 v-if="store.pokemons.isLoading">Loading</h3>
  <CardList :pokemons-list="store.pokemons.list ?? []" />
  <div></div>
</template>
