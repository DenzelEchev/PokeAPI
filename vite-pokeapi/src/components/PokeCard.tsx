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
      if(currentPokemon)
    return (
        <>
            <img src={currentPokemon.sprites.other["official-artwork"].front_default} alt="" />
            <h5>{pokemon}</h5>
            <span>{currentPokemon.height/10}</span>
            <span>{currentPokemon.weight/10}</span>
            <ul>{currentPokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
        </>
    )
}

export default PokeCard