// @refresh reset
import type { ReactNode } from "react";
import { memo, useCallback, useLayoutEffect, useRef, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Animated, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import { useController } from "Hooks/useController";
import { useUnmount } from "Hooks/useUnmount";
import { CoreTheme } from "Themes/Core";
import type { OptionalChildren } from "Types/React";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const ProgressRing = memo(function ProgressRing({
  children,
  onLayout,
  SVGChildren,
  progress = 100,
  strokeWidth = 10,
  shadowOpacity = 0.2,
  stroke = CoreTheme.BLACK,
  shadowColor = CoreTheme.BLACK,
}: Props) {
  const node = useRef<Circle | null>(null);
  const [strokeLength, setStrokeLength] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const controller = useController(new Controller());

  useLayoutEffect(() => {
    controller.Debouncer.execute(
      (circumference - (circumference - strokeLength)) * 5,
    );
  }, [controller, circumference, strokeLength]);

  useUnmount(() => controller.Debouncer.clear());

  const resize = useCallback(
    (e: LayoutChangeEvent) => {
      onLayout?.(e);
      if (!node.current) {
        return;
      }
      const [circumference, pathLength] = controller.computeProgress(
        node.current,
        progress,
      );
      setStrokeLength(pathLength);
      setCircumference(circumference);
    },
    [progress, controller, node, onLayout],
  );

  return (
    <View style={Styles.container}>
      <Svg style={Styles.background} viewBox="0 0 100 100" fill="none">
        <Circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth={strokeWidth}
          stroke={CoreTheme.LIGHTER_GRAY_TEXT}
        />
      </Svg>
      <Svg
        style={[Styles.foreground, { shadowColor, shadowOpacity }]}
        viewBox="0 0 100 100"
        fill="none">
        <AnimatedCircle
          cx="50"
          cy="50"
          r="45"
          ref={node}
          stroke={stroke}
          onLayout={resize}
          strokeLinecap="round"
          strokeWidth={strokeWidth * 0.6}
          strokeDasharray={circumference}
          strokeDashoffset={controller.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [circumference, strokeLength],
          })}
        />
        {SVGChildren}
      </Svg>
      {children}
    </View>
  );
});

interface Props extends OptionalChildren {
  stroke?: string;
  progress?: number;
  strokeWidth?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  SVGChildren?: ReactNode;
  onLayout?: (event: LayoutChangeEvent) => void;
}
