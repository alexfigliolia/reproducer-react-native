import { State } from "@figliolia/galena";
import type { IRepair, IRepairs } from "./types";

export class RepairModel extends State<IRepairs> {
  constructor() {
    super("Repairs", {
      repairs: RepairModel.repairs,
    });
  }

  private static readonly repairs: IRepair[] = [
    {
      title: "The toilet won't flush",
      description:
        "The pump appears to be disconnected from the chain. The chain is a little rusted and not latching properly",
      date: new Date().toISOString(),
      progress: 0,
      status: "pending",
    },
    {
      title: "The drain is clogged",
      description:
        "The sink is draining water slowly and I've tried using some hot water and solution. I think it needs a snake",
      date: new Date().toISOString(),
      progress: 75,
      status: "in-progress",
    },
    {
      title: "The dishwasher door is disconnected",
      description:
        "The dishwasher will no longer soft close. There appears to be a piece disconnected internally",
      date: new Date().toISOString(),
      progress: 100,
      status: "complete",
    },
  ];
}
