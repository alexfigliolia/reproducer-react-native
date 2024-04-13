import type { ComponentType } from "react";
import { memo } from "react";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";

export const NavIcon = memo(
  function NavIcon({ active, Icon, ActiveIcon }: Props) {
    if (active) {
      return <ActiveIcon stroke="#fff" />;
    }

    return <Icon stroke={CoreTheme.LIGHT_BLACK} />;
  },
  (pp, np) => pp.active === np.active,
);

interface Props {
  active: boolean;
  Icon: ComponentType<Stroke>;
  ActiveIcon: ComponentType<Stroke>;
}
