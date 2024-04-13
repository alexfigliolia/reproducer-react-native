import { useMemo } from "react";
import type { ChartDatum } from "@figliolia/rn-donut-chart";
import type { IRepairState } from "Models/Repairs";
import { useRepairs } from "State/Repairs";
import { RepairTheme } from "Themes/Repairs";

export const useRepairsGraph = () => {
  const repairs = useRepairs(state => state.repairs);
  const hash = useMemo(() => {
    const hash = new Map<IRepairState, number>();
    for (const { status } of repairs) {
      const current = hash.get(status) || 0;
      hash.set(status, current + 1);
    }
    return hash;
  }, [repairs]);
  return useMemo(() => {
    const data: ChartDatum[] = [];
    for (const [label, value] of hash) {
      const colors = RepairTheme.STATUS_GRADIENTS[label];
      data.push({
        label,
        value,
        stroke: colors,
        style: {
          shadowOpacity: 1,
          shadowRadius: 7.5,
          shadowColor: colors[1],
          shadowOffset: { height: 2, width: 0 },
        },
      });
    }
    return data;
  }, [hash]);
};
