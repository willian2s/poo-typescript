import prompt from "prompt-sync";
import Character from "./controllers/Character.controller";

let keyboard = prompt();
let option: number = 0;
const characterName: string = keyboard("Type name your character: ");
let character: Character = new Character(characterName, 100, 100, 50, 50);

while (option !== 9 || character.isDead()) {
  console.log("+=================Character=================+");
  console.log("|1. Train Attack                            |");
  console.log("|2. Train Defense                           |");
  console.log("|3. Rest                                    |");
  console.log("|4. Enter into battle                       |");
  console.log("|8. Print Attributes                        |");
  console.log("|9. Exit                                    |");
  console.log("+===========================================+");

  option = +keyboard("Choise action: ");

  switch (option) {
    case 1:
      character.trainAttack();
      console.log(character.showStatus());
      break;
    case 2:
      character.trainDefense();
      console.log(character.showStatus());
      break;
    case 3:
      let hours: number = +keyboard("Enter how many hours you will rest");
      character.rest(hours);
      console.log(character.showStatus());
      break;
    case 4:
      let wear: number = character.battle();
      console.log(`This battle cost ${wear} energy`);
      break;
    case 8:
      console.log(character.showStatus());
      break;
    default:
      break;
  }
}
