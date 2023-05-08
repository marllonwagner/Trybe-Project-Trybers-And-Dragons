import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(
    private character1:Fighter,
    private character2:Fighter,
  ) {
    super(character1);
  }

  fight(): number {
    const totalAtr1 = this
      .character1.defense + this
      .character1.lifePoints + this
      .character1.strength;
    const totalAtr2 = this
      .character2.defense + this
      .character2.lifePoints + this
      .character2.strength;

    return totalAtr1 > totalAtr2 ? 1 : -1;
  }
}

export default PVP;