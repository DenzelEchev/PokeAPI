import PokeCard from './PokeCard';
import { PokemonList, PokemonResult } from '../types/pokeListData'
import { useEffect, useState } from 'react';

const PokeFeed = () => {
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

        <ul>
            {pokemon.results.map((pokemon: PokemonResult) => (
            <li key={pokemon.name}>
                <PokeCard pokemon={pokemon.name}/>
            </li>
            ))}
        </ul>
  
    )
}

export default PokeFeed