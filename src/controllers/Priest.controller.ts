import { Util } from "../utils/Utils";
import { Character } from "./Character.controller";

export class Priest extends Character {
  private _spirit: number;
  private _versatility: number;
  constructor(name: string) {
    super(name);
    this._spirit = Util.randomize(100, 1_000);
    this._versatility = Util.randomize(100, 1_000);
  }

  public attack(): string {
    return "Priest Attack";
  }

  public defend(attacker: Character): string {
    return `The ${attacker} launched an attack on you`;
  }
}
