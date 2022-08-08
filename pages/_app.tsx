import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          Err Occured
        </div>
      }
    >
      <NextUIProvider>
        {loading && (
          <div className="fixed flex flex-col space-y-3 justify-center items-center backdrop-blur-lg w-screen h-screen z-50 cursor-wait">
            <div className="w-10 h-10 border-r-2 animate-spin border-r-black rounded-full" />
            <p className="text-xl">Loading</p>
          </div>
        )}
        <Component {...pageProps} setLoading={setLoading} />
      </NextUIProvider>
    </Suspense>
  );
}

export default MyApp;
