import type { AppProps } from "next/app";

import { LoaderProvider } from "@/contexts/useLoader";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <Component {...pageProps} />
    </LoaderProvider>
  );
}
