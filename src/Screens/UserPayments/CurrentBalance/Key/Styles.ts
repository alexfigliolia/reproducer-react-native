import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  key: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  keyItem: {
    width: "100%",
    paddingLeft: "7.5%",
    paddingRight: "7.5%",
  },
  keyItemInner: {
    ...UtilityStyles.fillAndCenter,
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "space-between",
    borderBottomColor: CoreTheme.BACKGROUND_GRAY,
  },
  keyLabel: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 25,
  },
  label: {
    fontWeight: "500",
    color: CoreTheme.GRAY_TEXT,
    textTransform: "capitalize",
    fontSize: Screen.HEADING_FONT_SIZE * 0.6,
  },
});
