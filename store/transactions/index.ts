import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, TransactionCreate, transactionsState } from "./types";

const initialState: transactionsState = {
  items: [
    {
      id: 1,
      type: "Доход",
      summ: 100,
      category: "Еда",
      date: new Date(),
      comment: "Комментарий",
    },
  ],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    editTransaction: (state, action: PayloadAction<Transaction>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },

    addTransaction: (state, action: PayloadAction<TransactionCreate>) => {
      const lastId =
        state.items.length > 0
          ? Math.max(...state.items.map((item) => item.id))
          : 0;

      state.items.push({
        ...action.payload,
        id: lastId + 1,
      });
    },

    removeTransaction: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTransaction, editTransaction, removeTransaction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
