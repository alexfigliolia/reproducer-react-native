import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    ...UtilityStyles.fill,
    ...UtilityStyles.center,
  },
  inner: {
    width: "90%",
  },
});
