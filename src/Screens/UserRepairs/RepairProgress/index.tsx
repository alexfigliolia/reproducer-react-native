import { Fragment, memo, useCallback, useState } from "react";
import { Animated, Easing, useAnimatedValue, View } from "react-native";
import { AnimatedNumber } from "react-native-counter-animation";
import { DonutChart } from "@figliolia/rn-donut-chart";
import { useMount } from "Hooks/useMount";
import { useRepairsGraph } from "Hooks/useRepairsGraph";
import { Styles } from "./Styles";

export const RepairProgress = memo(
  function RepairProgress() {
    const data = useRepairsGraph();
    const opacity = useAnimatedValue(0);
    const [text, setText] = useState("50%");
    const [fontSize, setFontSize] = useState<number | null>(null);

    useMount(() => {
      setInterval(() => {
        setText(`${Math.floor(Math.random() * 100)}%`);
      }, 4000);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay: 2800,
        useNativeDriver: true,
      }).start();
    });

    const onMeasure = useCallback((dimensions: number) => {
      setFontSize(dimensions / 4.5);
    }, []);

    return (
      <View style={Styles.container}>
        <DonutChart data={data} strokeWidth={12.5} onMeasure={onMeasure}>
          <View style={Styles.label}>
            {fontSize !== null && (
              <Fragment>
                <AnimatedNumber
                  delay={700}
                  value={text}
                  duration={2500}
                  easing={Easing.out(Easing.exp)}
                  style={[
                    Styles.text,
                    {
                      fontSize,
                      marginLeft: fontSize * -0.025,
                      marginRight: fontSize * -0.025,
                    },
                  ]}
                />
                <Animated.Text
                  style={[
                    Styles.labelText,
                    {
                      fontSize: fontSize * 0.25,
                      opacity: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    },
                  ]}>
                  Complete
                </Animated.Text>
              </Fragment>
            )}
          </View>
        </DonutChart>
      </View>
    );
  },
  () => true,
);
