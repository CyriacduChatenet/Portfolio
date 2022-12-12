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
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar displayMenu={true} />
      {isOpen ? <Menu /> : null}
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
