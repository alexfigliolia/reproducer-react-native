export class Dates {
  public static formatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "medium",
  });

  public static format(date: Date) {
    return this.formatter.format(date);
  }
}
