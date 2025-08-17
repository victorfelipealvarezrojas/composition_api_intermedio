<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Pokemon } from '../interfaces'
import { useQueryClient } from '@tanstack/vue-query'
import { getPokemonById } from '../helpers/get-pokemons'

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()
const router = useRouter()
const queryClient = useQueryClient()

const goTo = () => {
  router.push({
    name: 'pokemon-id',
    params: {
      id: props.pokemon.id,
    },
  })
}

// deja la data en caché para que no vuelva a hacer la petición
const preFetch = () => {
  queryClient.prefetchQuery({
    queryKey: ['poke', props.pokemon.id.toString()],
    queryFn: () => getPokemonById(props.pokemon.id.toString()),
  })
}
</script>

<template>
  <div class="pokemon-card" @click="goTo" @mouseenter="preFetch">
    <img :src="pokemon.frontSprite" :alt="pokemon.name" />
  </div>
  <h3>{{ pokemon.name }}</h3>
</template>

<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
