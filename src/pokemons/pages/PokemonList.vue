<script lang="ts" setup>
import { useGetPokemons } from '../composables/useGetPokemons'
import CardList from '../components/CardList.vue'

//import { useGetPokemons } from '../composables/useGetPokemons'
// const { count, isLoading, pokemons } = useGetPokemons()
const { pokemons, isLoading, count, error } = useGetPokemons()
</script>

<template>
  <h1>Pokemon List - {{ count }}</h1>
  <h3 v-if="isLoading">Loading</h3>
  <h3>{{ error }}</h3>
  <CardList :pokemons-list="pokemons ?? []" />
  <div></div>
</template>
