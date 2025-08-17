import { computed } from 'vue'
import { getPokemons, getPokemonById } from '../helpers/get-pokemons'
import { useQuery } from '@tanstack/vue-query'

export const useGetPokemons = () => {
  const {
    data: pokemons,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['poke'],
    queryFn: getPokemons,
    retry: 1,
  })

  return {
    pokemons,
    isLoading,
    isError,
    error,
    count: computed(() => pokemons.value?.length ?? 0),
  }
}

export const useGetPokemonById = (id: string) => {
  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['poke', id],
    queryFn: () => getPokemonById(id),
    retry: 1,
  })
  return {
    pokemon,
    isLoading,
    isError,
    error,
  }
}
