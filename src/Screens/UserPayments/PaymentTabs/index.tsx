import { memo, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-native";
import { Tabs } from "Components/Tabs";
import { USER_PAYMENT_METHODS, USER_PAYMENTS } from "Routing";
import { CoreTheme } from "Themes/Core";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const PaymentTabs = memo(
  function PaymentTabs(_: Propless) {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);

    const onPress = useCallback(
      (index: number) => {
        setActive(index);
        if (index === 0) {
          navigate(USER_PAYMENTS);
        } else {
          navigate(USER_PAYMENT_METHODS);
        }
      },
      [navigate],
    );

    const tabs = useMemo(
      () => [
        { text: "Balance", onPress },
        { text: "Payment Methods", onPress },
      ],
      [onPress],
    );

    return (
      <Tabs
        tabs={tabs}
        active={active}
        style={Styles.tabs}
        theme={CoreTheme.PAYMENT_COLORS}
      />
    );
  },
  () => true,
);
