import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    zIndex: 20,
    width: "100%",
    ...UtilityStyles.center,
    backgroundColor: "#fff",
    paddingTop: 15,
    ...UtilityStyles.lightShadow,
    shadowOffset: { height: -2.5, width: 0 },
  },
  inner: {
    width: "90%",
  },
});
