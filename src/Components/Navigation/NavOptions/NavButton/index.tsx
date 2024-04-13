import type { ReactNode } from "react";
import { memo, useCallback, useMemo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useLocation, useNavigate } from "react-router-native";
import { IconButton } from "Components/IconButton";
import { Colors } from "Tools/Colors";
import { Styles } from "./Styles";

export const NavButton = memo(
  function NavButton({ label, route, colors, children }: Props) {
    const navigate = useNavigate();
    const location = useLocation();

    const active = useMemo(
      () => location?.pathname?.startsWith(route),
      [location, route],
    );

    const activeStyles = useMemo(
      () => ({ ...Styles.activeStyles, shadowColor: colors[1] }),
      [colors],
    );

    const activeTextStyles = useMemo(
      () => ({
        color: colors[1],
        ...Styles.activeText,
        textShadowColor: Colors.RGBToRGBA(colors[1], 0.2),
      }),
      [colors],
    );

    const gradient = useMemo(() => {
      if (active) {
        return colors;
      }
      return ["#fff", "#fff"];
    }, [active, colors]);

    const nav = useCallback(() => {
      navigate(route);
    }, [navigate, route]);

    return (
      <IconButton
        label={label}
        onPress={nav}
        style={active ? activeStyles : undefined}
        textStyle={active ? activeTextStyles : undefined}>
        <LinearGradient style={Styles.gradient} colors={gradient}>
          {children(active)}
        </LinearGradient>
      </IconButton>
    );
  },
  (pp, np) => pp.route === np.route,
);

interface Props {
  label: string;
  route: string;
  colors: string[];
  children: (active: boolean) => ReactNode;
}
