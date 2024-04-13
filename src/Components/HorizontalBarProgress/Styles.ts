import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  viz: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  label: {
    minWidth: "10%",
    fontSize: Screen.PARAGRAPH_FONT_SIZE * 0.85,
    color: CoreTheme.LIGHT_GRAY_TEXT,
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "right",
  },
  progress: {
    width: "85%",
    height: 15,
    borderRadius: 7.5,
    backgroundColor: CoreTheme.BACKGROUND_GRAY,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
  },
  progressInner: {
    height: 7.5,
    borderRadius: 3.75,
    ...UtilityStyles.shadow,
  },
});
