import { State } from "@figliolia/galena";
import type { IModals } from "./types";

export class ModalsModel extends State<IModals> {
  constructor() {
    super("Modals", {
      addIssue: false,
    });
  }

  public openAddIssue = () => {
    this.update(state => {
      state.addIssue = true;
    });
  };

  public closeAddIssue = () => {
    this.update(state => {
      state.addIssue = false;
    });
  };

  public modalOpen() {
    const values = Object.values(this.getState());
    for (const v of values) {
      if (v) {
        return true;
      }
    }
    return false;
  }
}
