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
            let cutString = el.pokemon.name.slice(1, el.pokemon.name.length);
            let capitalized = el.pokemon.name[0].toUpperCase();
            const name = capitalized + cutString;

            return (
              <>
                <div
                  key={i}
                  className="w-full flex flex-col justify-center items-center"
                >
                  <p className="m-0.5">{name}</p>
                  {i !== pokemonNames.length - 1 ? (
                    <div className="w-2/6 border-b-1 border-dashed border-slate-300"></div>
                  ) : undefined}
                </div>
              </>
            );
          })
        : "No data to display"}
    </>
  );
}
