import PokeFeed from './components/PokeFeed';
import { PokemonList } from './types/pokeListData'
import { useEffect, useState } from 'react';

function App() {

  const [pokeList, setPokeList] = useState<PokemonList | null>(null)
  const [pokePage, setPokePage] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pokePage);
        const data = await response.json();
        setPokeList(data as PokemonList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pokePage]);

  if (!pokeList) {
    return <div className='flex items-center justify-center '>Loading...</div>;
  }
  return (
    <main>
      <PokeFeed pokeList={pokeList}></PokeFeed>
      <div>
        <button onClick={() => pokeList.previous && setPokePage(pokeList.previous)}>Previous</button>
        <button onClick={() => pokeList.next && setPokePage(pokeList.next)}>Next</button>
      </div>
    </main>

  )
}


export default App
