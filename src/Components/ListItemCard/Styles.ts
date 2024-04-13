import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    ...UtilityStyles.lightShadow,
  },
  title: {
    fontSize: Screen.SUB_HEADING_FONT_SIZE,
    fontWeight: "700",
    color: CoreTheme.BLACK,
    marginBottom: 5,
  },
  date: {
    marginTop: -2.5,
    fontSize: Screen.PARAGRAPH_FONT_SIZE * 0.9,
    color: CoreTheme.GRAY_TEXT,
    fontWeight: "600",
    marginBottom: 10,
  },
  description: {
    marginTop: 0,
    fontSize: Screen.PARAGRAPH_FONT_SIZE,
    fontWeight: "300",
    color: CoreTheme.LIGHT_BLACK,
  },
});
