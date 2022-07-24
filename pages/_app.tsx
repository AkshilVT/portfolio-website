import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          Err Occured
        </div>
      }
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Suspense>
  );
}

export default MyApp;
