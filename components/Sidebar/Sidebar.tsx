import styles from "./Sidebar.module.css";
import Link from "next/link";
import { SvgIcon } from "@/components/ui/SvgIcon/SvgIcon";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <Link className={styles.sidebarItemLink} href={"#"}>
            <SvgIcon
              className={styles.sidebarItemIcon}
              size={25}
              name={"dashboard"}
            />
            <p>Главная</p>
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link className={styles.sidebarItemLink} href={"#"}>
            <SvgIcon
              className={styles.sidebarItemIcon}
              size={25}
              name={"transfer"}
            />
            <p>Список транзакций</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
