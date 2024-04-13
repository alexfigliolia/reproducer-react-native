import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const BORDER_WIDTH = 3;
export const BORDER_RADIUS = 7.5;
export const INNER_RADIUS = BORDER_RADIUS * 0.75;

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: BORDER_RADIUS,
    alignSelf: "center",
    borderColor: "#fff",
    borderWidth: BORDER_WIDTH,
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  slider: {
    backgroundColor: "#fff",
    borderRadius: INNER_RADIUS,
    ...UtilityStyles.fill,
    position: "absolute",
    top: 0,
    left: 0,
    ...UtilityStyles.shadow,
  },
  gradient: {
    borderRadius: INNER_RADIUS,
    ...UtilityStyles.fill,
  },
});
