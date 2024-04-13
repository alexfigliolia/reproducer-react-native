import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";
import { UtilityStyles } from "Styles/Utility";

const buttonSize = Screen.WIDTH / 7.5;
const fontSize = buttonSize / 4.5;

export default StyleSheet.create({
  container: {
    ...UtilityStyles.center,
    width: buttonSize,
    flexDirection: "column",
  },
  touchable: {
    height: buttonSize,
    width: buttonSize,
    ...UtilityStyles.center,
    borderRadius: 10,
    marginBottom: 12.5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    shadowOffset: { height: 1.5, width: 0 },
  },
  text: {
    fontSize: fontSize,
    fontWeight: "700",
    color: CoreTheme.GRAY_TEXT,
    width: "120%",
    textAlign: "center",
  },
});
