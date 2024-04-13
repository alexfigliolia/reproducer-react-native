import { State } from "@figliolia/galena";
import type { IBalance } from "./types";

export class BalanceModel extends State<IBalance> {
  constructor() {
    super("Balance", {
      total: 5400,
      due: new Date(),
      breakdown: [
        { label: "rent", value: 2000 },
        { label: "utilities", value: 1000 },
        { label: "HOA", value: 800 },
        { label: "something", value: 600 },
        { label: "else", value: 1000 },
      ],
    });
  }
}
