import type { AppProps } from "next/app";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

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
        <LocomotiveScrollProvider options={options} containerRef={ref}>
          <Component {...pageProps} />
        </LocomotiveScrollProvider>
      </MenuProvider>
    </LoaderProvider>
  );
}
