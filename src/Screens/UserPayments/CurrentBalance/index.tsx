import { memo, useState } from "react";
import { Animated, Easing, useAnimatedValue, View } from "react-native";
import { AnimatedNumber } from "react-native-counter-animation";
import { DonutChart } from "@figliolia/rn-donut-chart";
import { useBalanceGraph } from "Hooks/useBalanceGraph";
import { useMount } from "Hooks/useMount";
import { useBalance } from "State/Balance";
import { UtilityStyles } from "Styles/Utility";
import { Dates } from "Tools/Dates";
import { Numbers } from "Tools/Numbers";
import type { Propless } from "Types/React";
import { Key } from "./Key";
import { Styles } from "./Styles";

export const CurrentBalance = memo(
  function CurrentBalance(_: Propless) {
    const [width, setWidth] = useState(20);
    const opacity = useAnimatedValue(0);
    const scrollAnim = useAnimatedValue(0);
    const due = useBalance(state => state.due);
    const total = useBalance(state => state.total);
    const balance = useBalanceGraph();

    useMount(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay: 1000,
        useNativeDriver: true,
      }).start();
    });

    return (
      <Animated.ScrollView
        style={Styles.container}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver: true },
        )}
        contentContainerStyle={UtilityStyles.center}>
        <Animated.View
          style={[
            Styles.chart,
            {
              transform: [
                {
                  scale: scrollAnim.interpolate({
                    inputRange: [-100, 0, 100],
                    outputRange: [1.25, 1, 0.75],
                    extrapolate: "clamp",
                  }),
                },
                {
                  translateY: scrollAnim.interpolate({
                    inputRange: [-100, 0, 100],
                    outputRange: [
                      width * 1.25 * -0.135,
                      1,
                      width * 1.25 * 0.215,
                    ],
                    extrapolate: "extend",
                  }),
                },
              ],
            },
          ]}>
          <DonutChart onMeasure={setWidth} strokeWidth={12.5} data={balance}>
            <View style={Styles.balance}>
              <AnimatedNumber
                delay={500}
                style={Styles.balanceText}
                easing={Easing.out(Easing.exp)}
                value={`$${Numbers.format(total)}`}
              />
              <Animated.Text
                style={[
                  Styles.balanceSubtext,
                  {
                    opacity: opacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ]}>
                Due on {Dates.format(due)}
              </Animated.Text>
            </View>
          </DonutChart>
        </Animated.View>
        <Key />
      </Animated.ScrollView>
    );
  },
  () => true,
);
