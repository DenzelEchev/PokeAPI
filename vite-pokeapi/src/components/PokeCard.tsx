import { PokemonData } from "../types/pokemonData"
import { useState, useEffect } from "react";

const PokeCard = ({pokemon}:{pokemon: string}) =>{
    const [currentPokemon, setCurrentPokemon] = useState<PokemonData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            setCurrentPokemon(data as PokemonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [pokemon]);

    return (
        <div>
            {currentPokemon && (
            <img src={currentPokemon.sprites.other["official-artwork"].front_default} alt="" />
            )}
            <h5>{pokemon}</h5>
            <span>{currentPokemon?.height}</span>
        </div>
    )
}

export default PokeCard