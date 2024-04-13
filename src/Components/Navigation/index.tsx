import { memo } from "react";
import { View } from "react-native";
import { useSafeInset } from "Hooks/useSafeInset";
import { Screen } from "State/Screen";
import type { Propless } from "Types/React";
import { NavOptions } from "./NavOptions";
import { Styles } from "./Styles";

export const Navigation = memo(
  function Navigation(_: Propless) {
    const paddingBottom = useSafeInset("bottom", 20);
    return (
      <View
        onLayout={Screen.setNavHeight}
        style={[Styles.container, { paddingBottom }]}>
        <View style={Styles.inner}>
          <NavOptions />
        </View>
      </View>
    );
  },
  () => true,
);
