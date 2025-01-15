import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";
import { ThemeProvider } from "@/app/theme/ThemeContext";

export default function App({ Component, pageProps, router }: AppProps) {
  const is404Page = router.pathname === "/404";

  return (
    <ThemeProvider>
      <MainLayout>
        <main
          className={`flex flex-col items-center justify-center ${
            is404Page ? "min-h-screen" : "min-h-screen w-full"
          }`}
        >
          <Component {...pageProps} />
        </main>
      </MainLayout>
    </ThemeProvider>
  );
}
