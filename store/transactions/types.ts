export interface transactionsState {
  items: Transaction[];
}

export interface Transaction {
  id: number;
  type: "Доход" | "Расход";
  summ: number;
  category: string;
  date: string;
  comment: string;
}

export interface TransactionCreate {
  type: "Доход" | "Расход";
  summ: number;
  category: string;
  date: string;
  comment: string;
}
