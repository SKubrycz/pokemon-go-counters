import { Suspense, useEffect, useState } from "react";

import PokemonDisplay from "./PokemonDisplay";

interface HoverWindowProps {
  x: number;
  y: number;
  type: number | null;
  userHovers: boolean;
}

export default function HoverWindow({
  x,
  y,
  type,
  userHovers,
}: HoverWindowProps) {
  const [pokemonData, setPokemonData] = useState<any>();

  const fetchPokemonData = async (type: number | null) => {
    if (type !== null) {
      let res: any;
      try {
        res = await fetch(`https://pokeapi.co/api/v2/type/${type}?limit=1`, {
          method: "GET",
        });
        console.log(res);
        setPokemonData(res);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchPokemonData(type);
      console.log(pokemonData);
    }, 300);
    return () => clearTimeout(timeout);
  }, [type]);

  //Fix Suspense or remove it

  return (
    <>
      <div
        style={{ top: y, left: x }}
        className={`min-w-24 min-h-24 p-2 absolute flex justify-center items-center bg-slate-400 pointer-events-none rounded-md shadow-lg ${userHovers ? "animate-come-up" : "animate-vanish"}`}
      >
        <Suspense fallback={<div className="text-amber-500">Loading...</div>}>
          <div className="flex flex-col">
            <h3 className="font-medium text-xl">Pokemon of this type:</h3>
            <PokemonDisplay pokemonData={pokemonData}></PokemonDisplay>
          </div>
        </Suspense>
      </div>
    </>
  );
}
