<script setup lang="ts">
import type { Pokemon } from '../interfaces'
import CardPokemon from './CardPokemon.vue'

interface Props {
  pokemonsList: Pokemon[]
}

defineProps<Props>()
</script>

<template>
  <div class="card-list">
    <CardPokemon v-for="pokemon in pokemonsList" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
