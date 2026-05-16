import { RootState } from "@/store";

export const selectTransactionsItems = (state: RootState) =>
  state.transactions.items;

export const selectConsum = (state: RootState) => state.transactions.items;
export const selectIncome = (state: RootState) => state.transactions.items;
