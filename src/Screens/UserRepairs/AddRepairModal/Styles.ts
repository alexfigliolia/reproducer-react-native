import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";
import { Colors } from "Tools/Colors";

export const Styles = StyleSheet.create({
  title: {
    fontSize: Screen.HEADING_FONT_SIZE * 1.15,
    fontWeight: "800",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 10,
    color: CoreTheme.LIGHT_BLACK,
    textShadowRadius: 5,
    textShadowColor: Colors.RGBToRGBA(CoreTheme.REPAIR_COLORS[1], 0.2),
    textShadowOffset: { height: 1.5, width: 0 },
  },
  subTitle: {
    fontSize: Screen.SUB_HEADING_FONT_SIZE,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 30,
    color: CoreTheme.LIGHT_GRAY_TEXT,
  },
  titleInput: {
    height: 45,
  },
  descriptionInput: {
    height: 150,
    paddingTop: 15,
    paddingBottom: 15,
  },
  touchable: {
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: CoreTheme.REPAIR_COLORS[0],
    shadowColor: CoreTheme.REPAIR_COLORS[0],
    shadowOpacity: 0.5,
    shadowRadius: 7,
    shadowOffset: { height: 5, width: 0 },
    minWidth: 150,
    alignSelf: "flex-end",
  },
  touchableInner: {
    padding: 15,
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: Screen.SUB_HEADING_FONT_SIZE,
    fontWeight: "700",
  },
});
