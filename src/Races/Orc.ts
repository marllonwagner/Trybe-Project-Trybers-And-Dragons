import Race from './Race';

class Orc extends Race {
  private _maxLifePoints:number;
  private static _numbersInstances = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._numbersInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._numbersInstances;
  }
}

export default Orc;