"use client";
import styles from "./MainPage.module.css";
import Image from "next/image";
import { CardIcon, CardIconBlack, IncomeIcon } from "@/assets/images";
import Link from "next/link";
import { selectTransactionsItems } from "@/store/transactions/selectors";
import { useAppSelector } from "@/hooks/useAppSelector";
export const MainPage = () => {
  const transactionItems = useAppSelector(selectTransactionsItems);

  return (
    <div className={styles.content}>
      <h2 className={styles.contentTitle}>Ваши деньги под полным контролем</h2>
      <p className={styles.contentDesc}>
        Мои Финансы» — профессиональный сервис для учёта доходов и расходов.
        Помогаем оптимизировать бюджет, избавиться от спонтанных трат и быстрее
        достигать крупных финансовых целей.
      </p>
      <button className={styles.contentBtn}>
        Добавление/Изменение транзакций
      </button>
      <ul className={styles.contentCards}>
        <li className={`${styles.contentCard} ${styles.contentCardBlue}`}>
          <div className={styles.contentCardTop}>
            <h3 className={styles.contentCardTitle}>Ваш текущий баланс</h3>
            <Image src={CardIcon} alt={"Иконка банка"} />
          </div>
          <p className={styles.contentCardMoney}>₽5,756</p>
          <div className={styles.contentCardBottom}>
            <p className={styles.contentCardBottomText}>Мои финансы</p>
          </div>
        </li>
        <li className={`${styles.contentCard} ${styles.contentCardWhite}`}>
          <div className={styles.contentCardTop}>
            <h3
              className={`${styles.contentCardTitle} ${styles.contentCardTitleWhite}`}
            >
              Ваш доходы за месяц
            </h3>
            <Image src={CardIconBlack} alt={"Иконка банка"} />
          </div>
          <p
            className={`${styles.contentCardMoney} ${styles.contentCardMoneyWhite}`}
          >
            ₽5,756
          </p>
          <p
            className={`${styles.contentCardBottomText}  ${styles.contentCardBottomTextWhite}`}
          >
            Мои финансы
          </p>
        </li>
        <li className={`${styles.contentCard} ${styles.contentCardBlue}`}>
          <div className={styles.contentCardTop}>
            <h3 className={styles.contentCardTitle}>Ваш текущий баланс</h3>
            <Image src={CardIcon} alt={"Иконка банка"} />
          </div>
          <p className={styles.contentCardMoney}>₽5,756</p>
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
          {transactionItems.map((transactionItem, index) => (
            <tr key={index}>
              <td className={styles.contentTableBodyItem}>
                <div className={styles.contentTableBodyContent}>
                  <Image
                    src={IncomeIcon}
                    alt={"Вид дохода"}
                    className={`${styles.contentTableBodyType} ${transactionItem.type == "Расход" ? styles.contentTableIcon : ""}`}
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
              <td className={styles.contentTableBodyItem}>28 Jan, 12.30 AM</td>
              <td className={styles.contentTableBodyItem}>
                {transactionItem.summ}
              </td>
              <td className={styles.contentTableBodyItem}>
                <Link
                  href={"/transactions/edit"}
                  className={styles.contentEditBtn}
                >
                  Изменить
                </Link>
              </td>
              <td className={styles.contentTableBodyItem}>
                <button className={styles.contentDeleteBtn}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
