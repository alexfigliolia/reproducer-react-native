import { createUseState } from "@figliolia/react-galena";
import { RepairModel } from "Models/Repairs";

export const Repairs = new RepairModel();
export const useRepairs = createUseState(Repairs);
