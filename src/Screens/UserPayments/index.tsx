import { memo } from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import { LazyComponent } from "Components/LazyComponent";
import { Redirect } from "Components/Redirect";
import { useUnmount } from "Hooks/useUnmount";
import { PaymentMethods as PMState } from "State/PaymentMethods";
import type { Propless } from "Types/React";
import { AddPaymentMethod } from "./AddPaymentMethod";
import { PaymentTabs } from "./PaymentTabs";
import { Styles } from "./Styles";

const PaymentMethods = LazyComponent(
  () => require("./PaymentMethods").PaymentMethods,
);
const CurrentBalance = LazyComponent(
  () => require("./CurrentBalance").CurrentBalance,
);

export const UserPayments = memo(
  function UserPayments(_: Propless) {
    useUnmount(() => {
      PMState.reset();
    });

    return (
      <View style={Styles.container}>
        <PaymentTabs />
        <Routes>
          <Route path="/" Component={CurrentBalance} />
          <Route path="/payment-methods" Component={PaymentMethods} />
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
        <AddPaymentMethod />
      </View>
    );
  },
  () => true,
);
