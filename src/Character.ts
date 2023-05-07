import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

// interface CharacterOptions {
//   race: Race;
//   archetype: Archetype;
//   maxLifePoints: number;
//   lifePoints: number;
//   strength: number;
//   defense: number;
//   dexterity: number;
//   energy: Energy;
//   name: string;
// }

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  // private _name: string;

  constructor(
    private _name:string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    const elfMage = new Elf(this._name, this._dexterity);
    const mage = new Mage(this._name);
    this._race = elfMage;
    this._archetype = mage;
    this._maxLifePoints = (elfMage.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: mage.type_,
      amount: getRandomInt(1, 10) };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const dmg = attackPoints - this._defense;
    let life = this._lifePoints;
    if (dmg > 0) {
      life -= dmg;
    }
    if (dmg <= 0) {
      life -= 1;
    }
    if (life <= 0) {
      life = -1;
    }
    this._lifePoints = life;
    return life;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;