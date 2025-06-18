import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Course Project',
  description: 'Tennis Store App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
