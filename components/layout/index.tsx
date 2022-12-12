import Head from 'next/head';
import { FC, ReactNode } from 'react';

import Navbar from '@/components/navbar';


interface IProps {
  children: ReactNode;
  title: string;
  description?: string;
}


const Layout: FC<IProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
