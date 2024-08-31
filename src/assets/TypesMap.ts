import { Fragment } from "react/jsx-runtime";
import {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FairyIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  NormalIcon,
  PoisonIcon,
  PsychicIcon,
  RockIcon,
  SteelIcon,
  WaterIcon,
} from "./Icons/PokemonTypes/export";

export interface Type {
  id: number;
  name: string;
  src: string;
  alt: string;
}

export interface TypeWithCounters extends Type {
  id: number;
  name: string;
  src: string;
  alt: string;
  weak: Type[];
  strong: Type[];
}

const Normal = {
  id: 1,
  name: "normal",
  src: NormalIcon,
  alt: "Normal",
};
const Fighting = {
  id: 2,
  name: "fighting",
  src: FightingIcon,
  alt: "Fighting",
};
const Flying = {
  id: 3,
  name: "flying",
  src: FlyingIcon,
  alt: "Flying",
};
const Poison = {
  id: 4,
  name: "poison",
  src: PoisonIcon,
  alt: "Poison",
};
const Ground = {
  id: 5,
  name: "ground",
  src: GroundIcon,
  alt: "Ground",
};
const Rock = {
  id: 6,
  name: "rock",
  src: RockIcon,
  alt: "Rock",
};
const Bug = {
  id: 7,
  name: "bug",
  src: BugIcon,
  alt: "Bug",
};
const Ghost = {
  id: 8,
  name: "ghost",
  src: GhostIcon,
  alt: "Ghost",
};
const Steel = {
  id: 9,
  name: "steel",
  src: SteelIcon,
  alt: "Steel",
};
const Fire = {
  id: 10,
  name: "fire",
  src: FireIcon,
  alt: "Fire",
};
const Water = {
  id: 11,
  name: "water",
  src: WaterIcon,
  alt: "Water",
};
const Grass = {
  id: 12,
  name: "grass",
  src: GrassIcon,
  alt: "Grass",
};
const Electric = {
  id: 13,
  name: "electric",
  src: ElectricIcon,
  alt: "Electric",
};
const Psychic = {
  id: 14,
  name: "psychic",
  src: PsychicIcon,
  alt: "Psychic",
};
const Ice = {
  id: 15,
  name: "ice",
  src: IceIcon,
  alt: "Ice",
};
const Dragon = {
  id: 16,
  name: "dragon",
  src: DragonIcon,
  alt: "Dragon",
};
const Dark = {
  id: 17,
  name: "dark",
  src: DarkIcon,
  alt: "Dark",
};
const Fairy = {
  id: 18,
  name: "fairy",
  src: FairyIcon,
  alt: "Fairy",
};

const typesMap: Array<TypeWithCounters> = [
  { ...Normal, weak: [Fighting], strong: [] },
  {
    ...Fighting,
    weak: [Fairy, Flying, Psychic],
    strong: [Dark, Ice, Normal, Rock, Steel],
  },
  { ...Flying, weak: [Electric, Ice, Rock], strong: [Bug, Grass, Fighting] },
  { ...Poison, weak: [Ground, Psychic], strong: [Fairy, Grass] },
  {
    ...Ground,
    weak: [Grass, Ice, Water],
    strong: [Electric, Fire, Poison, Rock, Steel],
  },
  {
    ...Rock,
    weak: [Fighting, Grass, Ground, Steel, Water],
    strong: [Bug, Fire, Flying, Ice],
  },
  { ...Bug, weak: [Fire, Flying, Rock], strong: [Dark, Grass, Psychic] },
  { ...Ghost, weak: [Dark, Ghost], strong: [Ghost, Psychic] },
  { ...Steel, weak: [Fighting, Fire, Ground], strong: [Fairy, Ice, Rock] },
  { ...Fire, weak: [Ground, Rock, Water], strong: [Bug, Grass, Ice, Steel] },
  { ...Water, weak: [Electric, Grass], strong: [Fire, Ground, Rock] },
  {
    ...Grass,
    weak: [Bug, Fire, Flying, Ice, Poison],
    strong: [Ground, Rock, Water],
  },
  { ...Electric, weak: [Ground], strong: [Flying, Water] },
  { ...Psychic, weak: [Bug, Dark, Ghost], strong: [Fighting, Poison] },
  {
    ...Ice,
    weak: [Fighting, Fire, Rock, Steel],
    strong: [Dragon, Flying, Grass, Ground],
  },
  { ...Dragon, weak: [Dragon, Fairy, Ice], strong: [Dragon] },
  { ...Dark, weak: [Bug, Fairy, Fighting], strong: [Ghost, Psychic] },
  { ...Fairy, weak: [Poison, Steel], strong: [Dark, Dragon, Fighting] },
];

/* const typesMap: Array<Type> = [
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
  ]; */

export { typesMap };
