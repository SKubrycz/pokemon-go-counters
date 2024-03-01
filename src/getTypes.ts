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
    readonly color: string;

    constructor(src: string, title: string, alt: string, weakAgainst: string[], strongAgainst: string[], color: string) {
    this.src = src;
    this.title = title;
    this.alt = alt;
    this.weakAgainst = weakAgainst;
    this.strongAgainst = strongAgainst;
    this.color = color;
    }
}

export function getTypes() {
    let typesArray: Type[] = [];

    const BugType = new Type(Bug, 'Bug', 'bug', [Fire, Flying, Rock], [Dark, Grass, Psychic], '#85C169');
    const DarkType = new Type(Dark, 'Dark', 'dark', [Bug, Fairy, Fighting], [Ghost, Psychic], '#414141');
    const DragonType = new Type(Dragon, 'Dragon', 'dragon', [Dragon, Fairy, Fighting], [Dragon], '#204CA1');
    const ElectricType = new Type(Electric, 'Electric', 'electric', [Ground], [Flying, Water], '#DEBF1C');
    const FairyType = new Type(Fairy, 'Fairy', 'fairy', [Poison, Steel], [Dark, Dragon, Fighting], '#E398E0');
    const FightingType = new Type(Fighting, 'Fighting', 'fighting', [Fairy, Flying, Psychic], [Dark, Ice, Normal, Rock, Steel], '#BB3939');
    const FireType = new Type(Fire, 'Fire', 'fire', [Ground, Rock, Water], [Bug, Grass, Ice, Steel], '#E78239');
    const FlyingType = new Type(Flying, 'Flying', 'flying', [Electric, Ice, Rock], [Bug, Grass, Fighting], '#9093DD');
    const GhostType = new Type(Ghost, 'Ghost', 'ghost', [Dark, Ghost], [Ghost, Fighting], '#9370DF');
    const GrassType = new Type(Grass, 'Grass', 'grass', [Bug, Fire, Flying, Ice, Poison], [Ground, Rock, Water], '#36A655');
    const GroundType = new Type(Ground, 'Ground', 'ground', [Grass, Ice, Water], [Electric, Fire, Poison, Rock, Steel], '#A9600B');
    const IceType = new Type(Ice, 'Ice', 'ice', [Fighting, Fire, Rock, Steel], [Dragon, Flying, Grass, Ground], '#41A9BF');
    const NormalType = new Type(Normal, 'Normal', 'normal', [Fighting], [], '#828282');
    const PoisonType = new Type(Poison, 'Poison', 'poison', [Ground, Psychic], [Fairy, Grass], '#D644D0');
    const PsychicType = new Type(Psychic, 'Psychic', 'psychic', [Bug, Dark, Ghost], [Fighting, Poison], '#EC7785');
    const RockType = new Type(Rock, 'Rock', 'rock', [Fighting, Grass, Ground, Steel, Water], [Bug, Fire, Flying, Ice], '#BCB175');
    const SteelType = new Type(Steel, 'Steel', 'steel', [Fighting, Fire, Ground], [Fairy, Ice, Rock], '#436E81');
    const WaterType = new Type(Water, 'Water', 'water', [Electric, Grass], [Fire, Ground, Rock], '#2E95DF');

    typesArray = [
        BugType, DarkType, DragonType, ElectricType, 
        FairyType, FightingType, FireType, FlyingType, 
        GhostType, GrassType, GroundType, IceType, 
        NormalType, PoisonType, PsychicType, RockType, 
        SteelType, WaterType
    ]

    return typesArray;
}
