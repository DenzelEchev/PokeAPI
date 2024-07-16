import { PokemonList } from "../types/pokeListData"
import PokeCard from "./PokeCard"

const PokeFeed = ({ pokeList }: { pokeList: PokemonList }) => {

  return (

    <section >
      <ul className="flex flex-wrap justify-around">
        {pokeList.results.map((pokemon) => (
          <li key={pokemon.name} className='flex flex-col items-center'>
            <PokeCard pokemon={pokemon.name} />
          </li>
        ))}
      </ul>
    </section>

  )
}

export default PokeFeed