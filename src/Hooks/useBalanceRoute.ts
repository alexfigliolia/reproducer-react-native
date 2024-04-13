import { useLocation } from "react-router-native";

export const useBalanceRoute = () => {
  const { pathname } = useLocation();
  return pathname === "/user-payments";
};
