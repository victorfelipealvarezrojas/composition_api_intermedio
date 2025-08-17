<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useGetPokemonById } from '../composables/useGetPokemons'

const route = useRoute()
const { id } = route.params

const { pokemon } = useGetPokemonById(id as string)
</script>

<template>
  <h1>Pokemon By Id {{ id }}</h1>
  <div v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.frontSprite" alt="Pokemon Image" />
    <p>Name: {{ pokemon.name }}</p>
  </div>
</template>
