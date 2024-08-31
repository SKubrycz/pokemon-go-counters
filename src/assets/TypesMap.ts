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

interface Type {
  id: number;
  name: string;
  src: string;
  alt: string;
  weak: string[]; // | number[] by id?
  strong: string[]; //same as above^
}

const typesMap: Map<string, Type> = new Map();

//keeping the type according to PokeAPI

typesMap.set("normal", {
  id: 1,
  name: "normal",
  src: Normal,
  alt: "Normal",
  weak: [],
  strong: [],
});

typesMap.set("fighting", {
  id: 2,
  name: "fighting",
  src: Fighting,
  alt: "Fighting",
  weak: [],
  strong: [],
});

typesMap.set("flying", {
  id: 3,
  name: "flying",
  src: Flying,
  alt: "Flying",
  weak: [],
  strong: [],
});

typesMap.set("poison", {
  id: 4,
  name: "poison",
  src: Poison,
  alt: "Poison",
  weak: [],
  strong: [],
});

typesMap.set("ground", {
  id: 5,
  name: "ground",
  src: Ground,
  alt: "Ground",
  weak: [],
  strong: [],
});

typesMap.set("rock", {
  id: 6,
  name: "rock",
  src: Rock,
  alt: "Rock",
  weak: [],
  strong: [],
});

typesMap.set("bug", {
  id: 7,
  name: "bug",
  src: Bug,
  alt: "Bug",
  weak: [],
  strong: [],
});

typesMap.set("ghost", {
  id: 8,
  name: "ghost",
  src: Ghost,
  alt: "Ghost",
  weak: [],
  strong: [],
});

typesMap.set("steel", {
  id: 9,
  name: "steel",
  src: Steel,
  alt: "Steel",
  weak: [],
  strong: [],
});

typesMap.set("fire", {
  id: 10,
  name: "fire",
  src: Fire,
  alt: "Fire",
  weak: [],
  strong: [],
});

typesMap.set("water", {
  id: 11,
  name: "water",
  src: Water,
  alt: "Water",
  weak: [],
  strong: [],
});

typesMap.set("grass", {
  id: 12,
  name: "grass",
  src: Grass,
  alt: "Grass",
  weak: [],
  strong: [],
});

typesMap.set("electric", {
  id: 13,
  name: "electric",
  src: Electric,
  alt: "Electric",
  weak: [],
  strong: [],
});

typesMap.set("psychic", {
  id: 14,
  name: "psychic",
  src: Psychic,
  alt: "Psychic",
  weak: [],
  strong: [],
});

typesMap.set("ice", {
  id: 15,
  name: "ice",
  src: Ice,
  alt: "Ice",
  weak: [],
  strong: [],
});

typesMap.set("dragon", {
  id: 16,
  name: "dragon",
  src: Dragon,
  alt: "Dragon",
  weak: [],
  strong: [],
});

typesMap.set("dark", {
  id: 17,
  name: "dark",
  src: Dark,
  alt: "Dark",
  weak: [],
  strong: [],
});

typesMap.set("fairy", {
  id: 18,
  name: "fairy",
  src: Fairy,
  alt: "Fairy",
  weak: [],
  strong: [],
});
