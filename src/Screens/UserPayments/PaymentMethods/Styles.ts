import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  scrollView: {
    ...UtilityStyles.fill,
    overflow: "visible",
  },
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  methods: {
    width: "100%",
    position: "relative",
  },
});
