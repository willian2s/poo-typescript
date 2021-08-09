import { Util } from "../utils/Utils";

export abstract class Character {
  protected _name: string;
  protected _armor: number;
  protected _maxLife: number;
  protected _currentLife: number;

  constructor(name: string) {
    this._name = name;
    this._armor = Util.randomize(100, 1_000);
    this._maxLife = Util.randomize(100, 1_000);
    this._currentLife = Util.randomize(40, this._maxLife);
  }

  public abstract attack(): string;

  public abstract defend(attacker: Character): string;
}
