import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { IRepairState } from "Models/Repairs";
import { RepairTheme } from "Themes/Repairs";
import { Styles } from "./Styles";

export class Controller {
  public static renderBar = (width: number, status: IRepairState) => {
    const colors = RepairTheme.STATUS_GRADIENTS[status];
    return (
      <View
        style={[
          Styles.progressBar,
          { width: `${width}%`, shadowColor: colors[0] },
        ]}>
        <LinearGradient
          colors={colors}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={Styles.progressInner}
        />
      </View>
    );
  };
}
