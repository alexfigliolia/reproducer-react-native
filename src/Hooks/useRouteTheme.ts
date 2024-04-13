import { useMemo } from "react";
import { useLocation } from "react-router-native";
import { UserRoutes } from "Routing/UserRoutes";

export const useRouteTheme = () => {
  const { pathname } = useLocation();
  return useMemo(() => UserRoutes.matchPath(pathname).theme, [pathname]);
};
