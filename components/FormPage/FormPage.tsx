"use client";

import styles from "./FormPage.module.css";

import { useEffect, useState } from "react";

import { useRouter, useParams } from "next/navigation";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

import { addTransaction, editTransaction } from "@/store/transactions";

import { selectTransactionsItems } from "@/store/transactions/selectors";

export const FormPage = () => {
  const router = useRouter();

  const params = useParams();

  const dispatch = useAppDispatch();

  const transactionItems = useAppSelector(selectTransactionsItems);

  const transactionId = Number(params.id);

  const currentTransaction = transactionItems.find(
    (item) => item.id === transactionId,
  );

  const isEdit = Boolean(currentTransaction);

  const [type, setType] = useState<"Доход" | "Расход">("Доход");

  const [summ, setSumm] = useState<number>(0);

  const [category, setCategory] = useState<string>("");

  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    if (!currentTransaction) return;

    setType(currentTransaction.type);

    setSumm(currentTransaction.summ);

    setCategory(currentTransaction.category);

    setComment(currentTransaction.comment);
  }, [currentTransaction]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEdit && currentTransaction) {
      dispatch(
        editTransaction({
          id: currentTransaction.id,
          type,
          summ,
          category,
          comment,
          date: currentTransaction.date,
        }),
      );
    } else {
      dispatch(
        addTransaction({
          type,
          summ,
          category,
          comment,
          date: new Date().toISOString(),
        }),
      );
    }

    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {isEdit ? "Изменение транзакции" : "Добавление транзакции"}
        </h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Тип транзакции</label>

            <select
              className={styles.input}
              value={type}
              onChange={(event) =>
                setType(event.target.value as "Доход" | "Расход")
              }
            >
              <option value="Доход">Доход</option>

              <option value="Расход">Расход</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Сумма</label>

            <input
              className={styles.input}
              type="number"
              placeholder="Введите сумму"
              value={summ}
              onChange={(event) => setSumm(Number(event.target.value))}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Категория</label>

            <input
              className={styles.input}
              type="text"
              placeholder="Например: Еда"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Комментарий</label>

            <textarea
              className={styles.textarea}
              placeholder="Комментарий"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <button className={styles.button} type="submit">
            {isEdit ? "Изменить транзакцию" : "Добавить транзакцию"}
          </button>
        </form>
      </div>
    </div>
  );
};
