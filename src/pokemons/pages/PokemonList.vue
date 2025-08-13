<script lang="ts" setup>
import { useGetPokemons } from '../composables/useGetPokemons'

const { count, isLoading, pokemons } = useGetPokemons()
</script>

<template>
  <h1>Pokemon List - {{ count }}</h1>
  <h3 v-if="isLoading">Loading</h3>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      {{ pokemon.name }}
    </li>
  </ul>
  <div></div>
</template>
