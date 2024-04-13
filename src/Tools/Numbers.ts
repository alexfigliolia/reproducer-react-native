export class Numbers {
  public static formatter = new Intl.NumberFormat("en-us");

  public static format(value: number) {
    return this.formatter.format(value);
  }
}
