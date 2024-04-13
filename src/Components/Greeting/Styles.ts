import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    ...UtilityStyles.center,
    paddingBottom: 20,
    zIndex: 20,
    backgroundColor: "rgba(255,255,255,0.75)",
  },
  text: {
    fontSize: Screen.HEADING_FONT_SIZE,
    fontWeight: "400",
    color: CoreTheme.BLACK,
    marginTop: 10,
    marginBottom: -4,
    textAlign: "center",
    textShadowRadius: Screen.HEADING_FONT_SIZE / 5,
    textShadowOffset: { height: Screen.HEADING_FONT_SIZE / 10, width: 0 },
  },
});
