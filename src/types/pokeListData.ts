export type PokemonList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResult[];
  };
  
  export type PokemonResult = {
    name: string;
    url: string;
  };
  