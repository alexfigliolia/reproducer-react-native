import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "column",
    rowGap: 15,
  },
  heading: {
    marginTop: 25,
  },
  progressBar: {
    height: 5,
    backgroundColor: "#fff",
    borderRadius: 3.75,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2.5 },
  },
  progressInner: {
    ...UtilityStyles.fill,
    borderRadius: 3.75,
  },
});
