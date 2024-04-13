import { memo } from "react";
import { useLocation } from "react-router-native";
import { FloatingGradientButton } from "Components/FloatingGradientButton";
import { Plus } from "Icons/Plus";
import { CoreTheme } from "Themes/Core";

export const AddPaymentMethod = memo(
  function AddPaymentMethod() {
    const location = useLocation();
    if (location.pathname.endsWith("/payment-methods")) {
      return (
        <FloatingGradientButton
          colors={CoreTheme.PAYMENT_COLORS}
          onPress={() => {}}>
          <Plus stroke="#fff" />
        </FloatingGradientButton>
      );
    }
    return null;
  },
  () => true,
);
