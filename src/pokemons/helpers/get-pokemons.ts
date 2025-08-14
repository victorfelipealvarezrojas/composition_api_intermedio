import axios from 'axios'
import pokemonAxiosApi from '../api/PokemonApi'
import type { Pokemon, PokemonListResponse, PokemonResponse } from '../interfaces'

export const getPokemons = async (): Promise<Pokemon[]> => {
  const { data } = await pokemonAxiosApi.get<PokemonListResponse>('/pokemon?limit=100')

  const pokemonPromises: Promise<Pokemon>[] = []

  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      }
    })
    pokemonPromises.push(pokemonPromise)
  }
  return await Promise.all(pokemonPromises)
}
