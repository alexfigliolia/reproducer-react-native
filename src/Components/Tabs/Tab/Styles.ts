import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";

const padding = Screen.SUB_HEADING_FONT_SIZE * 0.75;

export const Styles = StyleSheet.create({
  button: {
    width: "100%",
    flex: 1,
  },
  text: {
    fontWeight: "800",
    paddingTop: padding,
    paddingBottom: padding,
    textAlign: "center",
    letterSpacing: -(Screen.SUB_HEADING_FONT_SIZE * 0.025),
    fontSize: Screen.SUB_HEADING_FONT_SIZE,
  },
});
