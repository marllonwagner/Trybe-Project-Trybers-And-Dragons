import Fighter, { SimpleFighter } from './Fighter';
import Monster from './Monster';

class Dragon extends Monster {
  constructor() {
    super(999, 100);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number): number {
    let life = this._lifePoints;
    life -= attackPoints;
    
    if (life <= 0) {
      life = -1;
    }
    this._lifePoints = life;
    return life;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Dragon;