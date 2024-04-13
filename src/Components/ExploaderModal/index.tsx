import { memo, useEffect } from "react";
import { Animated, KeyboardAvoidingView, View } from "react-native";
import { FloatingGradientButton } from "Components/FloatingGradientButton";
import { useController } from "Hooks/useController";
import { Close } from "Icons/Close";
import type { OptionalChildren } from "Types/React";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

const KeyboardView = Animated.createAnimatedComponent(KeyboardAvoidingView);

export const ExploaderModal = memo(function ExploaderModal({
  close,
  theme,
  visible,
  children,
}: Props) {
  const controller = useController(new Controller());

  useEffect(() => {
    controller.toggle(visible);
  }, [visible, controller]);

  return (
    <KeyboardView
      behavior="height"
      style={[
        Styles.container,
        {
          opacity: controller.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              scale: controller.scale.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        },
      ]}>
      <View style={Styles.inner}>{children}</View>
      <FloatingGradientButton colors={theme} onPress={close}>
        <Close stroke="#fff" />
      </FloatingGradientButton>
    </KeyboardView>
  );
});

interface Props extends OptionalChildren {
  theme: string[];
  visible: boolean;
  close: () => void;
}
