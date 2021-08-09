import { Util } from "../utils/Utils";
import { Character } from "./Character.controller";

export class Mage extends Character {
  private _intellect: number;
  private _speed: number;
  constructor(name: string) {
    super(name);
    this._intellect = Util.randomize(100, 1000);
    this._speed = Util.randomize(100, 1000);
  }

  public attack(): string {
    return "Mage Attack";
  }

  public defend(attacker: Character): string {
    return `You received an attack`;
  }
}
