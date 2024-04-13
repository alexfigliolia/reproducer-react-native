import type { ReactNode } from "react";
import { memo } from "react";
import { Text, View } from "react-native";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const HorizontalBarProgress = memo(function HorizontalBarProgress({
  progressBar,
  progress = 100,
  stroke = CoreTheme.LIGHT_BLACK,
}: Props) {
  return (
    <View style={Styles.viz}>
      <Text style={Styles.label}>{progress}%</Text>
      <View style={Styles.progress}>
        {progressBar ? (
          progressBar(Math.max(2.5, progress))
        ) : (
          <View
            style={[
              Styles.progressInner,
              { width: `${progress}%`, backgroundColor: stroke },
            ]}
          />
        )}
      </View>
    </View>
  );
});

interface Props extends Stroke {
  progress?: number;
  progressBar?: (progress: number) => ReactNode;
}
