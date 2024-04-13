import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    ...UtilityStyles.fill,
    position: "relative",
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
