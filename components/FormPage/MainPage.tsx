"use client";

import styles from "./MainPage.module.css";
import { selectTransactionsItems } from "@/store/transactions/selectors";
import { useAppSelector } from "@/hooks/useAppSelector";
export const FormPage = () => {
  const transactionItems = useAppSelector(selectTransactionsItems);

  return <div className={styles.content}></div>;
};
