import {
    Bug, Dark, Dragon, Electric,
    Fairy, Fighting, Fire, Flying,
    Ghost, Grass, Ground, Ice,
    Normal, Poison, Psychic, Rock,
    Steel, Water,
  } from './image-import';


export class Type {
    readonly src: string;
    readonly title: string;
    readonly alt: string;
    readonly weakAgainst: string[];
    readonly strongAgainst: string[];

    constructor(src: string, title: string, alt: string, weakAgainst: string[], strongAgainst: string[]) {
    this.src = src;
    this.title = title;
    this.alt = alt;
    this.weakAgainst = weakAgainst;
    this.strongAgainst = strongAgainst;
    }
}

export function getTypes() {
    let typesArray: Type[] = [];

    const BugType = new Type(Bug, 'Bug', 'bug', ['Fire', 'Flying', 'Rock'], ['Dark', 'Grass', 'Psychic']);
    const DarkType = new Type(Dark, 'Dark', 'dark', ['Bug', 'Fairy', 'Fighting'], ['Ghost', 'Psychic']);
    const DragonType = new Type(Dragon, 'Dragon', 'dragon', ['Dragon', 'Fairy', 'Fighting'], ['Dragon']);
    const ElectricType = new Type(Electric, 'Electric', 'electric', ['Ground'], ['Flying', 'Water']);
    const FairyType = new Type(Fairy, 'Fairy', 'fairy', ['Poison', 'Steel'], ['Dark', 'Dragon', 'Fighting']);
    const FightingType = new Type(Fighting, 'Fighting', 'fighting', ['Fairy', 'Flying', 'Psychic'], ['Dark', 'Ice', 'Normal', 'Rock', 'Steel']);
    const FireType = new Type(Fire, 'Fire', 'fire', ['Ground', 'Rock', 'Water'], ['Bug', 'Grass', 'Ice', 'Steel']);
    const FlyingType = new Type(Flying, 'Flying', 'flying', ['Electric', 'Ice', 'Rock'], ['Bug', 'Grass', 'Fighting']);
    const GhostType = new Type(Ghost, 'Ghost', 'ghost', ['Dark', 'Ghost'], ['Ghost', 'Fighting']);
    const GrassType = new Type(Grass, 'Grass', 'grass', ['Bug', 'Fire', 'Flying', 'Ice', 'Poison'], ['Ground', 'Rock', 'Water']);
    const GroundType = new Type(Ground, 'Ground', 'ground', ['Grass', 'Ice', 'Water'], ['Electric', 'Fire', 'Poison', 'Rock', 'Steel']);
    const IceType = new Type(Ice, 'Ice', 'ice', ['Fighting', 'Fire', 'Rock', 'Steel'], ['Dragon', 'Flying', 'Grass', 'Ground']);
    const NormalType = new Type(Normal, 'Normal', 'normal', ['Fighting'], []);
    const PoisonType = new Type(Poison, 'Poison', 'poison', ['Ground', 'Psychic'], ['Fairy', 'Grass']);
    const PsychicType = new Type(Psychic, 'Psychic', 'psychic', ['Bug', 'Dark', 'Ghost'], ['Fighting', 'Poison']);
    const RockType = new Type(Rock, 'Rock', 'rock', ['Fighting', 'Grass', 'Ground', 'Steel', 'Water'], ['Bug', 'Fire', 'Flying', 'Ice']);
    const SteelType = new Type(Steel, 'Steel', 'steel', ['Fighting', 'Fire', 'Ground'], ['Fairy', 'Ice', 'Rock']);
    const WaterType = new Type(Water, 'Water', 'water', ['Electric', 'Grass'], ['Fire', 'Ground', 'Rock']);

    typesArray = [
        BugType, DarkType, DragonType, ElectricType, 
        FairyType, FightingType, FireType, FlyingType, 
        GhostType, GrassType, GroundType, IceType, 
        NormalType, PoisonType, PsychicType, RockType, 
        SteelType, WaterType
    ]

    return typesArray;
}
