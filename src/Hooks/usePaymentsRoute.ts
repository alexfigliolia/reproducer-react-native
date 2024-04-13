import { useLocation } from "react-router-native";

export const usePaymentsRoute = () => {
  const { pathname } = useLocation();
  return pathname.startsWith("/user-payments");
};
