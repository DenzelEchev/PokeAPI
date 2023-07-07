import { PokemonData } from './types/pokemonData'
import { PokemonList, PokemonResult } from './types/pokeListData'
import { useEffect, useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState<PokemonList | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokemon(data as PokemonList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [pokemon]);
  
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-teal-600">
        PokéAPI Pokédex
      </h1>
      <input type="text" name="" id="" />
      <div>
        <ul>
        {pokemon.results.map((pokemon: PokemonResult) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
        </ul>
      </div>  
    </div>

  )
}

export default App
