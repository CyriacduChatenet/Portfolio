import type { AppProps } from "next/app";

import LoaderProvider from "@/contexts/useLoader";
import { MenuProvider } from "@/contexts/useMenu";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <MenuProvider>
            <Component {...pageProps} />
      </MenuProvider>
    </LoaderProvider>
  );
}
