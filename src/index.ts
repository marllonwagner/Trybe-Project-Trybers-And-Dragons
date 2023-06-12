import Race from './Races';
import Dwarf from './Races/Dwarf';
import Orc from './Races/Orc';
import Elf from './Races/Elf';
import Halfling from './Races/Halfling';
import Character from './Character';
import { PVP } from './Battle';

// const dwarf1 = new Dwarf('xabluzin', 10);
// const dwarf2 = new Dwarf('xabluzao', 12);

const char = new Character('player1');
const char2 = new Character('player2');
// const mob = new Monster();
// const mob2 = new Monster();

const luta = new PVP(char, char2);

// mob.receiveDamage(500);

console.log(luta);

export default Race;
export { Dwarf, Orc, Elf, Halfling };
