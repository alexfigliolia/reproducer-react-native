import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { OptionalChildren } from "Types/React";
import { Styles } from "./Styles";

export const FloatingGradientButton = memo(
  function FloatingGradientButton({ onPress, colors, children }: Props) {
    return (
      <View
        style={[
          Styles.container,
          {
            shadowColor: colors[1],
          },
        ]}>
        <LinearGradient
          colors={colors}
          end={{ y: 1, x: 0 }}
          start={{ y: 0, x: 1 }}
          style={Styles.gradient}>
          <TouchableOpacity onPress={onPress} style={Styles.touchable}>
            {children}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  },
  () => true,
);

interface Props extends OptionalChildren {
  colors: string[];
  onPress: () => void;
}
