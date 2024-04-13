import { memo } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { UserBalance } from "Dimensions/UserBalance";
import { useBalance } from "State/Balance";
import { Screen as ScreenState, useScreen } from "State/Screen";
import { Colors } from "Tools/Colors";
import { Numbers } from "Tools/Numbers";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const Key = memo(
  function Key(_: Propless) {
    const breakdown = useBalance(state => state.breakdown);
    const contentArea = useScreen(() => ScreenState.getContentArea());
    const minHeight = contentArea - UserBalance.GRAPH_SPACE;
    return (
      <View style={[Styles.key, { minHeight }]}>
        {breakdown.map(({ label, value }, i) => {
          const colors = Colors.getGradient(i);
          return (
            <View key={label} style={Styles.keyItem}>
              <View style={Styles.keyItemInner}>
                <View style={Styles.keyLabel}>
                  <LinearGradient colors={colors} style={Styles.marker} />
                  <Text style={Styles.label}>{label}</Text>
                </View>
                <Text style={[Styles.label]}>${Numbers.format(value)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  },
  () => true,
);
