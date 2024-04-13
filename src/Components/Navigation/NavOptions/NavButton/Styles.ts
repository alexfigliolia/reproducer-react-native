import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  activeStyles: {
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 2.5, width: 0 },
  },
  activeText: {
    textShadowRadius: 3,
    textShadowOffset: { height: 1, width: 0 },
  },
  gradient: {
    ...UtilityStyles.fill,
    ...UtilityStyles.center,
    padding: 10,
    borderRadius: 10,
  },
});
