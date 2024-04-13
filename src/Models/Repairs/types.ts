export interface IRepairs {
  repairs: IRepair[];
}

export interface IRepair {
  title: string;
  description: string;
  date: string;
  progress: number;
  status: IRepairState;
}

export type IRepairState = "complete" | "in-progress" | "pending";
