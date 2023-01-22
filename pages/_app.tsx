import type { AppProps } from "next/app";
import { useRef } from "react";

import LoaderProvider from "@/contexts/useLoader";
import { MenuProvider } from "@/contexts/useMenu";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LoaderProvider>
      <MenuProvider>
            <Component {...pageProps} />
      </MenuProvider>
    </LoaderProvider>
  );
}
