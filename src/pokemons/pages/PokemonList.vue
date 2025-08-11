<script lang="ts" setup>
import pokemonAxiosApi from '../api/PokemonApi'
import type { PokemonListResponse } from '../interfaces/pokemon-list.response'

pokemonAxiosApi
  .get<PokemonListResponse>('/pokemon?limit=100')
  .then((response) => {
    console.log('Pokemon List:', response.data.results)
  })
  .catch((error) => {
    console.error('Error fetching Pokemon list:', error)
  })
</script>

<template>
  <h1>Pokemon List</h1>
</template>
