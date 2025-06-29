import { PropsWithChildren, FC } from 'react';

import Footer from '../Footer/footer';
import Header from '../Header/header';

import styles from './layout.module.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};