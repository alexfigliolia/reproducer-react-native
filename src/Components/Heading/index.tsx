import { memo, useMemo } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const Heading = memo(function Heading({
  text,
  style,
  color = CoreTheme.LIGHT_BLACK,
  fontSize = Screen.HEADING_FONT_SIZE,
}: Props) {
  const letterSpacing = useMemo(() => -(fontSize * 0.03), [fontSize]);
  return (
    <Text style={[Styles.heading, { color, fontSize, letterSpacing }, [style]]}>
      {text}
    </Text>
  );
});

interface Props {
  text: string;
  color?: string;
  fontSize?: number;
  style?: StyleProp<TextStyle>;
}
