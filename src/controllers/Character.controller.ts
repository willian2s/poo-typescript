export default class Character {
  constructor(
    private _name: string,
    private _energy: number,
    private _life: number,
    private _attack: number,
    private _defense: number
  ) {}

  public get getName(): string {
    return this._name;
  }

  public set setName(name: string) {
    this._name = name;
  }

  public showStatus(): string {
    return (
      "Warrior:" +
      "\nName: " +
      this._name +
      "\nEnergy: " +
      this._energy.toFixed(1) +
      "\nAttack: " +
      this._attack.toFixed(1) +
      "\nDefense: " +
      this._defense.toFixed(1)
    );
  }

  private randomize(factor: number): number {
    return Math.random() * factor;
  }

  public trainAttack(): void {
    this._attack += this.randomize(7);
    this._energy -= this.randomize(10);
    if (this._attack > 100) {
      this._attack = 100;
    }
  }

  public trainDefense(): void {
    this._defense += this.randomize(5);
    this._energy -= this.randomize(10);
    if (this._defense > 100) {
      this._defense = 100;
    }
  }

  public rest(hours: number): void {
    this._energy += hours + this.randomize(10);
    if (this._energy > 100) {
      this._energy = 100;
    }
  }

  public battle(): number {
    let wear: number = this.randomize(100);
    this._energy -= wear;
    return wear;
  }

  public isDead(): boolean {
    return this._energy < 0;
  }
}
