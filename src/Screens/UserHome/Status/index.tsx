import { memo } from "react";
import { View } from "react-native";
import { CoreTheme } from "Themes/Core";
import type { Propless } from "Types/React";
import { Bar } from "./Bar";
import { Styles } from "./Styles";

export const Status = memo(
  function Status(_: Propless) {
    return (
      <View style={Styles.container}>
        <Bar
          delay={0}
          label="Payments"
          progress={100}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={CoreTheme.HOME_COLORS}
        />
        <Bar
          delay={100}
          label="Fixes"
          progress={70}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={CoreTheme.REPAIR_COLORS}
        />
        <Bar
          delay={200}
          label="Something"
          progress={65}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={CoreTheme.PAYMENT_COLORS}
        />
        <Bar
          delay={300}
          label="Else"
          progress={35}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={CoreTheme.SETTINGS_COLORS}
        />
      </View>
    );
  },
  () => true,
);
