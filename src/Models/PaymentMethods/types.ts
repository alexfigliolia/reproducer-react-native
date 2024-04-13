import type { ImmutableDict } from "Generics/ImmutableDict";

export interface IPaymentMethods {
  banks: ImmutableDict<number, IBank>;
  active: number;
  showActions: boolean;
  activeTheme: string[];
  confirmDeletion: number;
  transactions: ITransaction[];
}

export interface IBank {
  id: number;
  name: string;
  primary: boolean;
}

export interface ITransaction {
  date: Date;
  bankId: number;
  description: string;
}
