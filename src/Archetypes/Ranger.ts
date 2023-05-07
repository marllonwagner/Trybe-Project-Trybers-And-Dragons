import Energy, { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype
  implements Energy {
  private static _numbersInstances = 0;
  public type_: EnergyType;
  private _amount:number;

  constructor(name:string) {
    super(name);
    Ranger._numbersInstances += 1;
    this.type_ = 'stamina';
    this._amount = 0;
  }

  get amount() {
    return this._amount;
  }

  get energyType() {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Ranger._numbersInstances;
  }
}

export default Ranger;