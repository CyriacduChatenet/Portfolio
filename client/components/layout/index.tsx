import Head from "next/head";
import { FC, ReactNode } from "react";

import Navbar from "@/components/navbar";
import Menu from "@/components/menu";
import useMenu from "@/contexts/useMenu";

interface IProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const Layout: FC<IProps> = ({ title, description, children }) => {
  const { isOpen } = useMenu();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={description}
        />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {isOpen ? <Menu /> : null}
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
