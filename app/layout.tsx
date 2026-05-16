"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Sidebar } from "@/components";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/store";
// export const metadata: Metadata = {
//   title: "Хакатон 2026",
//   description: "Разработка проекта для хакатона",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  suppressHydrationWarning - нужен для next-themes (Он не блокирует другие уровни)
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeProvider defaultTheme={"light"}>
            <Header />
            <main className={"main"}>
              <Sidebar />
              <section className={"content"}>{children}</section>
            </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
