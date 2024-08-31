import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from "./Icons/PokemonTypes/export";

export interface Type {
  id: number;
  name: string;
  src: string;
  alt: string;
  weak: string[];
  strong: string[];
}

const typesMap: Array<Type> = [
  {
    id: 1,
    name: "normal",
    src: Normal,
    alt: "Normal",
    weak: ["fighting"],
    strong: [],
  },
  {
    id: 2,
    name: "fighting",
    src: Fighting,
    alt: "Fighting",
    weak: ["fairy", "flying", "psychic"],
    strong: ["dark", "ice", "normal", "rock", "steel"],
  },
  {
    id: 3,
    name: "flying",
    src: Flying,
    alt: "Flying",
    weak: ["electric", "ice", "rock"],
    strong: ["bug", "grass", "fighting"],
  },
  {
    id: 4,
    name: "poison",
    src: Poison,
    alt: "Poison",
    weak: ["ground", "psychic"],
    strong: ["fairy", "grass"],
  },
  {
    id: 5,
    name: "ground",
    src: Ground,
    alt: "Ground",
    weak: ["grass", "ice", "water"],
    strong: ["electric", "fire", "poison", "rock", "steel"],
  },
  {
    id: 6,
    name: "rock",
    src: Rock,
    alt: "Rock",
    weak: ["fighting", "grass", "ground", "steel", "water"],
    strong: ["bug", "fire", "flying", "ice"],
  },
  {
    id: 7,
    name: "bug",
    src: Bug,
    alt: "Bug",
    weak: ["fire", "flying", "rock"],
    strong: ["dark", "grass", "psychic"],
  },
  {
    id: 8,
    name: "ghost",
    src: Ghost,
    alt: "Ghost",
    weak: ["dark", "ghost"],
    strong: ["ghost", "psychic"],
  },
  {
    id: 9,
    name: "steel",
    src: Steel,
    alt: "Steel",
    weak: ["fighting", "fire", "ground"],
    strong: ["fairy", "ice", "rock"],
  },
  {
    id: 10,
    name: "fire",
    src: Fire,
    alt: "Fire",
    weak: ["ground", "rock", "water"],
    strong: ["bug", "grass", "ice", "steel"],
  },
  {
    id: 11,
    name: "water",
    src: Water,
    alt: "Water",
    weak: ["electric", "grass"],
    strong: ["fire", "ground", "rock"],
  },
  {
    id: 12,
    name: "grass",
    src: Grass,
    alt: "Grass",
    weak: ["bug", "fire", "flying", "ice", "poison"],
    strong: ["ground", "rock", "water"],
  },
  {
    id: 13,
    name: "electric",
    src: Electric,
    alt: "Electric",
    weak: ["ground"],
    strong: ["flying", "water"],
  },
  {
    id: 14,
    name: "psychic",
    src: Psychic,
    alt: "Psychic",
    weak: ["bug", "dark", "ghost"],
    strong: ["fighting", "poison"],
  },
  {
    id: 15,
    name: "ice",
    src: Ice,
    alt: "Ice",
    weak: ["fighting", "fire", "rock", "steel"],
    strong: ["dragon", "flying", "grass", "ground"],
  },
  {
    id: 16,
    name: "dragon",
    src: Dragon,
    alt: "Dragon",
    weak: ["dragon", "fairy", "ice"],
    strong: ["dragon"],
  },
  {
    id: 17,
    name: "dark",
    src: Dark,
    alt: "Dark",
    weak: ["bug", "fairy", "fighting"],
    strong: ["ghost", "psychic"],
  },
  {
    id: 18,
    name: "fairy",
    src: Fairy,
    alt: "Fairy",
    weak: ["poison", "steel"],
    strong: ["dark", "dragon", "fighting"],
  },
];

//keeping the type according to PokeAPI

//Map object idea leftovers
/* typesMap.set("normal");

typesMap.set("fighting");

typesMap.set("flying");

typesMap.set("poison");

typesMap.set("ground");

typesMap.set("rock");

typesMap.set("bug");

typesMap.set("ghost");

typesMap.set("steel");

typesMap.set("fire");

typesMap.set("water");

typesMap.set("grass");

typesMap.set("electric");

typesMap.set("psychic");

typesMap.set("ice");

typesMap.set("dragon");

typesMap.set("dark");

typesMap.set("fairy"); */

export { typesMap };
