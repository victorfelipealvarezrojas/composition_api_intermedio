import { reactive } from 'vue'
import type { Pokemon } from '../interfaces'

interface Store {
  // State
  pokemons: {
    list: Pokemon[]
    const: number
    isLoading: boolean
    hasError: boolean
    errorMessage?: string
  }

  // Actions
  startLoadingPokemon: () => Promise<void>
  loadedPokemons: (pokemons: Pokemon[]) => void
  loadPokemonsFailed: (error: string) => void
}

const store = reactive<Store>({
  pokemons: {
    list: [],
    const: 0,
    isLoading: false,
    hasError: false,
    errorMessage: undefined,
  },
  startLoadingPokemon: async function (): Promise<void> {
    this.pokemons = {
      ...this.pokemons,
      isLoading: true,
      hasError: false,
      errorMessage: undefined,
    }
  },
  loadedPokemons: function (data: Pokemon[]): void {
    this.pokemons = {
      list: data,
      const: data.length,
      isLoading: false,
      hasError: false,
      errorMessage: undefined,
    }
  },
  loadPokemonsFailed: function (error: string): void {
    this.pokemons = {
      ...this.pokemons,
      isLoading: false,
      hasError: true,
      errorMessage: error,
    }
  },
})

export default store
