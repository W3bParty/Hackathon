"use client";
import styles from "./ThemeToggle.module.css";
import { useTheme } from "next-themes";
import { SvgIcon } from "@/components/ui/SvgIcon/SvgIcon";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const onClickWrapper = (
    isDark: boolean,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      data-hide-on-theme="dark"
      className={styles.themeBtn}
      onClick={(e) => onClickWrapper(theme === "dark", e)}
    >
      <SvgIcon name={"moon"} size={36} data-hide-on-theme="dark" />
      <SvgIcon name={"sun"} size={36} data-hide-on-theme="light" />
    </button>
  );
};
