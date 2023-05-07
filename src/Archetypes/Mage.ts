import Energy, { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype
  implements Energy {
  private static _numbersInstances = 0;
  public type_: EnergyType;
  private _amount:number;

  constructor(name:string) {
    super(name);
    Mage._numbersInstances += 1;
    this.type_ = 'mana';
    this._amount = 0;
  }

  get amount() {
    return this._amount;
  }

  get energyType() {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Mage._numbersInstances;
  }
}

export default Mage;