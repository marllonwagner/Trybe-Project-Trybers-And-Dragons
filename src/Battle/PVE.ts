import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    private character:Fighter,
    private mob:SimpleFighter[],
  ) {
    super(character);
  }

  fight(): number {
    const totalAtr1 = this
      .character.defense + this
      .character.lifePoints + this
      .character.strength;
    let totalAtr2 = 0;
    this.mob.forEach((e) => {
      totalAtr2 += e.lifePoints + e.strength;
    });

    return totalAtr1 > totalAtr2 ? 1 : -1;
  }
}

export default PVE;