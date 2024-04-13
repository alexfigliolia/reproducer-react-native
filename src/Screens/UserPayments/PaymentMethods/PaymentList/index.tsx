import { memo } from "react";
import { View } from "react-native";
import { Heading } from "Components/Heading";
import { ListItemCard } from "Components/ListItemCard";
import { usePaymentMethods } from "State/PaymentMethods";
import { Dates } from "Tools/Dates";
import { Styles } from "./Styles";

export const PaymentList = memo(function PaymentList() {
  const banks = usePaymentMethods(state => state.banks);
  const transactions = usePaymentMethods(state => state.transactions);
  return (
    <View style={Styles.container}>
      <Heading text="Recent Transactions" />
      {transactions.map((payment, i) => {
        return (
          <ListItemCard
            key={i}
            date={Dates.format(payment.date)}
            description={payment.description}
            title={banks.get(payment.bankId)?.name ?? ""}
          />
        );
      })}
    </View>
  );
});
