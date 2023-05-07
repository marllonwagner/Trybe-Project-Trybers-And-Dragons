import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    private _lifePoints = 85,
    private readonly _strength = 63,
  ) {
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

export default Monster;