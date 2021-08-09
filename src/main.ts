import { Character } from "./controllers/Character.controller";
import { Mage } from "./controllers/Mage.controller";
import { Priest } from "./controllers/Priest.controller";

let mage: Character = new Mage("Yoshi mage");
let priest: Character = new Priest("Yoshi priest");

console.log("mage   :>> ", mage);
console.log("priest :>> ", priest);
console.log("mage   :>> ", mage.attack());
console.log("priest :>> ", priest.attack());
