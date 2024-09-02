import { Suspense, useEffect, useState } from "react";

import PokemonDisplay from "./PokemonDisplay";

import { Type } from "../../assets/TypesMap";

interface HoverWindowProps {
  x: number;
  y: number;
  type: Type | null;
  userHovers: boolean;
}

export default function HoverWindow({
  x,
  y,
  type,
  userHovers,
}: HoverWindowProps) {
  const [pokemonData, setPokemonData] = useState<any>();

  const fetchPokemonData = async (id: number | null) => {
    if (type !== null) {
      let res: any;
      try {
        res = await fetch(`https://pokeapi.co/api/v2/type/${id}?limit=1`, {
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
      if (type) fetchPokemonData(type.id);
      console.log(pokemonData);
    }, 300);
    return () => clearTimeout(timeout);
  }, [type]);

  //Fix Suspense or remove it

  return (
    <>
      <div
        style={{ top: y, left: x }}
        className={`min-w-24 min-h-24 p-4 absolute flex flex-col justify-center items-center bg-slate-500 bg-opacity-80 backdrop-blur-sm pointer-events-none rounded-md border-1 border-slate-400 shadow-lg ${userHovers ? "animate-come-up" : "animate-vanish"} z-10`}
      >
        <Suspense fallback={<div className="text-amber-500">Loading...</div>}>
          <h3 className="font-medium text-lg">
            Pokemon of type {type ? type.alt : "-"}:
          </h3>
          <div className="w-10/12 h-0.5 m-2 bg-slate-200 rounded-sm"></div>
          <PokemonDisplay pokemonData={pokemonData}></PokemonDisplay>
        </Suspense>
      </div>
    </>
  );
}
