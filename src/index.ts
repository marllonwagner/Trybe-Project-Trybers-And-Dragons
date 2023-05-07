import Race from './Races';
import Dwarf from './Races/Dwarf';
import Orc from './Races/Orc';
import Elf from './Races/Elf';
import Halfling from './Races/Halfling';
import Character from './Character';

// const dwarf1 = new Dwarf('xabluzin', 10);
// const dwarf2 = new Dwarf('xabluzao', 12);

const char = new Character('cuzão');

console.log(char);
console.log(char.dexterity);

export default Race;
export { Dwarf, Orc, Elf, Halfling };