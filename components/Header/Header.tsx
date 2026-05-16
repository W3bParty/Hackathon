import styles from "./Header.module.css";
import Image from "next/image";
import { LogoIcon } from "@/assets/images";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Image
          width={36}
          height={36}
          className={styles.headerLogo}
          src={LogoIcon}
          alt={"Логотип"}
        />
        <h1 className={styles.headerTitle}>Мои финансы</h1>
      </div>
      <h2 className={styles.headerInfo}>
        Простой и удобный инструмент для отслеживания финансов
      </h2>
      <ThemeToggle />
    </header>
  );
};
