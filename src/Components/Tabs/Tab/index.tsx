import { memo } from "react";
import { Animated, TouchableOpacity, useAnimatedValue } from "react-native";
import { useMount } from "Hooks/useMount";
import { useUpdate } from "Hooks/useOnUpdate";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const Tab = memo(function Tab({
  text,
  onPress,
  active,
  textColor = CoreTheme.LIGHT_BLACK,
}: Props) {
  const font = useAnimatedValue(0);

  useMount(() => {
    if (active) {
      font.setValue(1);
    }
  });

  useUpdate(() => {
    Animated.timing(font, {
      toValue: active ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [active, font]);

  return (
    <TouchableOpacity onPress={onPress} style={Styles.button}>
      <Animated.Text
        style={[
          Styles.text,
          {
            color: font.interpolate({
              inputRange: [0, 1],
              outputRange: [textColor, "#fff"],
            }),
          },
        ]}>
        {text}
      </Animated.Text>
    </TouchableOpacity>
  );
});

interface Props {
  text: string;
  active: boolean;
  textColor?: string;
  onPress: () => void;
}
