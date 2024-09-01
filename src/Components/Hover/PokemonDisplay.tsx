import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonObj {
  pokemon: Pokemon;
  slot: number;
}

export default function PokemonDisplay({ pokemonData }: any) {
  const [pokemonNames, setPokemonNames] = useState<PokemonObj[]>([]);

  //filter data and get names

  const filterPokemonData = async () => {
    if (pokemonData) {
      const data = await pokemonData.json();
      let pokemonSlice: Array<any> = [];
      let knownIndexes: Array<number> = [];
      do {
        let index: number = 0;
        do {
          index = Math.floor(Math.random() * data.pokemon.length);
        } while (knownIndexes.includes(index));
        pokemonSlice.push(data.pokemon[index]);
        knownIndexes.push(index);
      } while (pokemonSlice.length < 3);
      setPokemonNames(pokemonSlice);
    }
  };

  useEffect(() => {
    filterPokemonData();
  }, [pokemonData]);

  return (
    <>
      {pokemonNames
        ? pokemonNames.map((el, i) => {
            const filteredStr = el.pokemon.name.split("-");
            return (
              <>
                <p key={i}>{filteredStr[0]}</p>
              </>
            );
          })
        : "No data to display"}
    </>
  );
}
