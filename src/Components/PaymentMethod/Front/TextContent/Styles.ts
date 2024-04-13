import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";

export const Styles = StyleSheet.create({
  bank: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
    fontSize: Screen.HEADING_FONT_SIZE,
  },
  meta: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: Screen.SUB_HEADING_FONT_SIZE,
  },
  date: {
    fontWeight: "800",
  },
});
