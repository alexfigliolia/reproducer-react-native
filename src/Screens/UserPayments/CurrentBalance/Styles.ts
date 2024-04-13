import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UserBalance } from "Dimensions/UserBalance";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Colors } from "Tools/Colors";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "visible",
  },
  chart: {
    width: UserBalance.GRAPH_DIMENSIONS,
    maxWidth: UserBalance.GRAPH_MAX_WIDTH,
    marginTop: UserBalance.GRAPH_MARGIN_TOP,
    marginBottom: UserBalance.GRAPH_MARGIN_BOTTOM,
  },
  balance: {
    position: "absolute",
    top: 0,
    left: 0,
    ...UtilityStyles.fillAndCenter,
  },
  balanceText: {
    fontWeight: "400",
    marginRight: Screen.HEADING_FONT_SIZE * -0.035,
    marginLeft: Screen.HEADING_FONT_SIZE * -0.035,
    fontSize: Screen.HEADING_FONT_SIZE * 1.75,
    color: CoreTheme.PAYMENT_COLORS[1],
    textShadowRadius: 5,
    textShadowColor: Colors.RGBToRGBA(CoreTheme.PAYMENT_COLORS[1], 0.5),
    textShadowOffset: { height: 2.5, width: 0 },
  },
  balanceSubtext: {
    fontWeight: "600",
    letterSpacing: -Screen.HEADING_FONT_SIZE * 0.025,
    fontSize: Screen.SUB_HEADING_FONT_SIZE,
    color: CoreTheme.GRAY_TEXT,
  },
});
