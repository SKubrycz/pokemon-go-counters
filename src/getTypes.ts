import {
    Bug, Dark, Dragon, Electric,
    Fairy, Fighting, Fire, Flying,
    Ghost, Grass, Ground, Ice,
    Normal, Poison, Psychic, Rock,
    Steel, Water,
  } from './image-import';

export default function getTypes() {
    let typesArray: Type[] = [];

    class Type {
        readonly src: string;
        readonly title: string;
        readonly alt: string;
      
        constructor(src: string, title: string, alt: string) {
          this.src = src;
          this.title = title;
          this.alt = alt;
        }
    }

    const BugType = new Type(Bug, 'Bug', 'bug');
    const DarkType = new Type(Dark, 'Dark', 'dark');
    const DragonType = new Type(Dragon, 'Dragon', 'dragon');
    const ElectricType = new Type(Electric, 'Electric', 'electric');
    const FairyType = new Type(Fairy, 'Fairy', 'fairy');
    const FightingType = new Type(Fighting, 'Fighting', 'fighting');
    const FireType = new Type(Fire, 'Fire', 'fire');
    const FlyingType = new Type(Flying, 'Flying', 'flying');
    const GhostType = new Type(Ghost, 'Ghost', 'ghost');
    const GrassType = new Type(Grass, 'Grass', 'grass');
    const GroundType = new Type(Ground, 'Ground', 'ground');
    const IceType = new Type(Ice, 'Ice', 'ice');
    const NormalType = new Type(Normal, 'Normal', 'normal');
    const PoisonType = new Type(Poison, 'Poison', 'poison');
    const PsychicType = new Type(Psychic, 'Psychic', 'psychic');
    const RockType = new Type(Rock, 'Rock', 'rock');
    const SteelType = new Type(Steel, 'Steel', 'steel');
    const WaterType = new Type(Water, 'Water', 'water');

    typesArray = [
        BugType, DarkType, DragonType, ElectricType, 
        FairyType, FightingType, FireType, FlyingType, 
        GhostType, GrassType, GroundType, IceType, 
        NormalType, PoisonType, PsychicType, RockType, 
        SteelType, WaterType
    ]

    return typesArray;
}