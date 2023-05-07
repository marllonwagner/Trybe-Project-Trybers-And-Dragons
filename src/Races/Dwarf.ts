import Race from './Race';

class Dwarf extends Race {
  private static _numbersInstances = 0;

  constructor(
    name:string,
    dexterity: number,
    private _maxLifePoints = 80,
  ) {
    super(name, dexterity);
    Dwarf._numbersInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._numbersInstances;
  }
}

export default Dwarf;