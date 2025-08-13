import { computed, onMounted, ref } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true)

export const useGetPokemons = () => {
  onMounted(async () => {
    const data = await getPokemons()
    pokemons.value = data
    isLoading.value = false
  })

  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value.length),
  }
}
