import { memo } from "react";
import { G, Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const HomeStroke = memo(
  function HomeStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 32 32">
        <G fill="none" fillRule="evenodd">
          <Path d="m0 0h32v32h-32z" />
          <Path
            d="m0 32v-16.4400602c0-1.1489958.50538353-2.241192 1.38466997-2.9924428l12.69406683-10.84564419c1.1290109-.96461213 2.8034221-.96220407 3.9295901.00565135l12.6157966 10.84231384c.8740064.7511418 1.3758765 1.8399284 1.3758765 2.9849077v16.4452743zm16.6967403-28.75790289c-.3753759-.32208063-.933493-.32288198-1.3098166-.00188064l-12.69361344 10.82756343c-.43962752.3749992-.69231026.9201869-.69231026 1.493727v14.4384931h7.999v-4c0-3.3137085 2.6862915-6 6-6s6 2.6862915 6 6v4h8.001l-.001-14.4436984c0-.5143817-.2032501-1.0060434-.5624641-1.3725666l-.1254495-.1173992zm-.6967403 18.75790289c-2.209139 0-4 1.790861-4 4v4h8v-4c0-2.209139-1.790861-4-4-4zm0-13c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z"
            fill={stroke}
            fillRule="nonzero"
          />
        </G>
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
