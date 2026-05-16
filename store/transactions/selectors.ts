import { RootState } from "@/store";

export const selectTransactionsItems = (state: RootState) =>
  state.transactions.items;

export const selectCurrentBalance = (state: RootState) =>
  state.transactions.items.reduce((acc, item) => {
    if (item.type === "Доход") {
      return acc + item.summ;
    }

    return acc - item.summ;
  }, 0);

export const selectIncomeLastMonth = (state: RootState) => {
  const currentDate = new Date();

  return state.transactions.items
    .filter((item) => {
      const itemDate = new Date(item.date);

      return (
        item.type === "Доход" &&
        itemDate.getMonth() === currentDate.getMonth() &&
        itemDate.getFullYear() === currentDate.getFullYear()
      );
    })
    .reduce((acc, item) => acc + item.summ, 0);
};

export const selectConsumLastMonth = (state: RootState) => {
  const currentDate = new Date();

  return state.transactions.items
    .filter((item) => {
      const itemDate = new Date(item.date);

      return (
        item.type === "Расход" &&
        itemDate.getMonth() === currentDate.getMonth() &&
        itemDate.getFullYear() === currentDate.getFullYear()
      );
    })
    .reduce((acc, item) => acc + item.summ, 0);
};
