import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Colors } from "Tools/Colors";

const size = Screen.WIDTH * 0.65;

export const Styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    ...UtilityStyles.center,
  },
  text: {
    color: CoreTheme.PAYMENT_COLORS[1],
    fontWeight: "300",
    textShadowRadius: 7.5,
    textShadowColor: Colors.RGBToRGBA(CoreTheme.PAYMENT_COLORS[1], 0.5),
    textShadowOffset: { height: 1.5, width: 0 },
  },
  labelText: {
    color: CoreTheme.LIGHT_GRAY_TEXT,
    fontWeight: "700",
  },
});
