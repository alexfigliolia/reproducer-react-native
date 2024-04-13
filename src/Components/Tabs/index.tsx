import { memo, useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Animated, useAnimatedValue, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Screen } from "Dimensions/Screen";
import { useMount } from "Hooks/useMount";
import { useUpdate } from "Hooks/useOnUpdate";
import { CoreTheme } from "Themes/Core";
import { BORDER_WIDTH, Styles } from "./Styles";
import { Tab } from "./Tab";

export const Tabs = memo(
  function Tabs({ tabs, active, style, theme = CoreTheme.HOME_COLORS }: Props) {
    const translate = useAnimatedValue(0);

    useMount(() => {
      translate.setValue(active);
    });

    useUpdate(() => {
      Animated.spring(translate, {
        toValue: active,
        useNativeDriver: true,
      }).start();
    }, [translate, active]);

    const interpolation = useMemo(
      () =>
        tabs.map(
          (_, i) =>
            i * ((Screen.WIDTH * 0.9) / tabs.length) + i * -BORDER_WIDTH,
        ),
      [tabs],
    );

    const pressHandlers = useMemo(() => {
      return tabs.map(({ onPress }, i) => {
        return () => onPress(i);
      });
    }, [tabs]);

    return (
      <View style={[Styles.container, style]}>
        <Animated.View
          style={[
            Styles.slider,
            {
              width: `${100 / tabs.length}%`,
              transform: [
                {
                  translateX: translate.interpolate({
                    inputRange: [0, 1],
                    outputRange: interpolation,
                  }),
                },
              ],
            },
          ]}>
          <LinearGradient
            colors={theme}
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 1 }}
            style={Styles.gradient}
          />
        </Animated.View>
        {tabs.map(({ text }, index) => {
          return (
            <Tab
              key={text}
              text={text}
              active={active === index}
              onPress={pressHandlers[index]}
            />
          );
        })}
      </View>
    );
  },
  (pp, np) => pp.active === np.active,
);

interface Props {
  active: number;
  theme?: string[];
  style?: StyleProp<ViewStyle>;
  tabs: { text: string; onPress: (index: number) => void }[];
}
