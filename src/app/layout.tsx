import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tennis Store as part of NextJS Course Project',
  description: 'Tennis Store App',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
