"use client";

import styles from "./MainPage.module.css";
import Image from "next/image";
import { CardIcon, CardIconBlack, IncomeIcon } from "@/assets/images";
import Link from "next/link";

import {
  selectConsumLastMonth,
  selectCurrentBalance,
  selectIncomeLastMonth,
  selectTransactionsItems,
} from "@/store/transactions/selectors";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { removeTransaction } from "@/store/transactions";

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const transactionItems = useAppSelector(selectTransactionsItems);

  const currentBalance = useAppSelector(selectCurrentBalance);

  const incomeLastMonth = useAppSelector(selectIncomeLastMonth);

  const consumLastMonth = useAppSelector(selectConsumLastMonth);

  const handleDeleteTransaction = (id: number) => {
    dispatch(removeTransaction(id));
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.contentTitle}>Ваши деньги под полным контролем</h2>

      <p className={styles.contentDesc}>
        Мои Финансы — профессиональный сервис для учёта доходов и расходов.
        Помогаем оптимизировать бюджет, избавиться от спонтанных трат и быстрее
        достигать крупных финансовых целей.
      </p>

      <Link href={"/transactions/add"} className={styles.contentBtn}>
        Добавить транзакцию
      </Link>

      <ul className={styles.contentCards}>
        <li className={`${styles.contentCard} ${styles.contentCardBlue}`}>
          <div className={styles.contentCardTop}>
            <h3 className={styles.contentCardTitle}>Ваш текущий баланс</h3>

            <Image src={CardIcon} alt={"Иконка банка"} />
          </div>

          <p className={styles.contentCardMoney}>₽{currentBalance}</p>

          <div className={styles.contentCardBottom}>
            <p className={styles.contentCardBottomText}>Мои финансы</p>
          </div>
        </li>

        <li className={`${styles.contentCard} ${styles.contentCardWhite}`}>
          <div className={styles.contentCardTop}>
            <h3
              className={`${styles.contentCardTitle} ${styles.contentCardTitleWhite}`}
            >
              Ваши доходы за месяц
            </h3>

            <Image src={CardIconBlack} alt={"Иконка банка"} />
          </div>

          <p
            className={`${styles.contentCardMoney} ${styles.contentCardMoneyWhite}`}
          >
            ₽{incomeLastMonth}
          </p>

          <p
            className={`${styles.contentCardBottomText} ${styles.contentCardBottomTextWhite}`}
          >
            Мои финансы
          </p>
        </li>

        <li className={`${styles.contentCard} ${styles.contentCardBlue}`}>
          <div className={styles.contentCardTop}>
            <h3 className={styles.contentCardTitle}>Ваши расходы за месяц</h3>

            <Image src={CardIcon} alt={"Иконка банка"} />
          </div>

          <p className={styles.contentCardMoney}>₽{consumLastMonth}</p>

          <p className={styles.contentCardBottomText}>Мои финансы</p>
        </li>
      </ul>

      <table className={styles.contentTable}>
        <thead className={styles.contentTableHeader}>
          <tr>
            <th className={styles.contentTableHeaderItem}>Описание</th>

            <th className={styles.contentTableHeaderItem}>ID Транзакции</th>

            <th className={styles.contentTableHeaderItem}>Категория</th>

            <th className={styles.contentTableHeaderItem}>Дата</th>

            <th className={styles.contentTableHeaderItem}>Сумма</th>

            <th className={styles.contentTableHeaderItem}></th>

            <th className={styles.contentTableHeaderItem}></th>
          </tr>
        </thead>

        <tbody className={styles.contentTableBody}>
          {transactionItems.map((transactionItem) => (
            <tr key={transactionItem.id}>
              <td className={styles.contentTableBodyItem}>
                <div className={styles.contentTableBodyContent}>
                  <Image
                    src={IncomeIcon}
                    alt={"Вид дохода"}
                    className={`${styles.contentTableBodyType} ${
                      transactionItem.type === "Расход"
                        ? styles.contentTableIcon
                        : ""
                    }`}
                  />

                  {transactionItem.comment}
                </div>
              </td>

              <td className={styles.contentTableBodyItem}>
                {transactionItem.id}
              </td>

              <td className={styles.contentTableBodyItem}>
                {transactionItem.category}
              </td>

              <td className={styles.contentTableBodyItem}>
                {new Date(transactionItem.date).toLocaleDateString("ru-RU")}
              </td>

              <td className={styles.contentTableBodyItem}>
                ₽{transactionItem.summ}
              </td>

              <td className={styles.contentTableBodyItem}>
                <Link
                  href={`/transactions/edit/${transactionItem.id}`}
                  className={styles.contentEditBtn}
                >
                  Изменить
                </Link>
              </td>

              <td className={styles.contentTableBodyItem}>
                <button
                  className={styles.contentDeleteBtn}
                  onClick={() => handleDeleteTransaction(transactionItem.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
