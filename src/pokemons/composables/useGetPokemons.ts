import { computed } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
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
  })

  return {
    pokemons,
    isLoading,
    isError,
    error,
    count: computed(() => pokemons.value?.length ?? 0),
  }
}
