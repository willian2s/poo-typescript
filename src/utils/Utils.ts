export class Util {
  public static randomize(init: number, end: number) {
    return init + Math.random() * (end - init);
  }
}
