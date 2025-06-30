'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './header.module.css';

export default function Header() {

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href='/' className={styles.logo}>
          TENNIS STORE
        </Link>
        
        <nav className={styles.nav}>
          <Link href='/' 
            className={classNames(styles.navLink, pathname === '/' ? styles.active : '')}>
              Home
          </Link>
          <Link href='/rackets' 
            className={classNames(styles.navLink, pathname === '/rackets' ? styles.active : '')}>
              Rackets
          </Link>
          <Link href='/rackets/top-10' 
            className={classNames(styles.navLink, pathname === '/about' ? styles.active : '')}>
              Top-10
          </Link>
          {/* <Link href='/about' 
            className={classNames(styles.navLink, pathname === '/about' ? styles.active : '')}>
              About
          </Link> */}
        </nav>
        
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <span className={styles.icon}>🔍</span>
          </button>
          <button className={styles.iconButton}>
            <span className={styles.icon}>🛒</span>
            <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}