import '../styles/globals.css';
import type { Metadata } from 'next';
import { Layout } from "../components/Layout/layout";
import { FC, PropsWithChildren } from "react";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Course Project',
  description: 'Tennis Store App',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
