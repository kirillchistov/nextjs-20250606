import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import { isDemoMode } from '../constants/demo';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    isDemoMode()
      ? 'https://kirillchistov.github.io/nextjs-20250606'
      : 'http://localhost:3000'
  ),
  title: 'Tennis Store as part of NextJS Course Project',
  description: 'Tennis Store App',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
