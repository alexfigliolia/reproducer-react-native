import { useMemo } from "react";
import { useBalance } from "State/Balance";
import { Colors } from "Tools/Colors";

export const useBalanceGraph = () => {
  const breakdown = useBalance(state => state.breakdown);
  return useMemo(() => {
    return breakdown.map((b, i) => {
      const colors = Colors.getGradient(i);
      return {
        ...b,
        stroke: colors,
        style: {
          shadowOpacity: 1,
          shadowRadius: 7.5,
          shadowColor: colors[1],
          shadowOffset: { height: 2, width: 0 },
        },
      };
    });
  }, [breakdown]);
};
