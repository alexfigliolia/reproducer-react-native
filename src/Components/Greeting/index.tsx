import { memo, useMemo } from "react";
import { Text, View } from "react-native";
import { useRouteTheme } from "Hooks/useRouteTheme";
import { useSafeInset } from "Hooks/useSafeInset";
import { Modals, useModals } from "State/Modals";
import { Screen } from "State/Screen";
import { UtilityStyles } from "Styles/Utility";
import { Colors } from "Tools/Colors";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const Greeting = memo(
  function Greeting(_: Propless) {
    const theme = useRouteTheme();
    const modalOpen = useModals(() => Modals.modalOpen());
    const shadow = useMemo(() => Colors.RGBToRGBA(theme[1], 0.3), [theme]);
    const paddingTop = useSafeInset("top", 20);
    return (
      <View
        onLayout={Screen.setGreetingHeight}
        style={[
          Styles.container,
          { paddingTop },
          modalOpen ? UtilityStyles.shadow : UtilityStyles.lightShadow,
        ]}>
        <Text
          style={[Styles.text, { color: theme[1], textShadowColor: shadow }]}>
          Welcome back, Alex
        </Text>
      </View>
    );
  },
  () => true,
);
