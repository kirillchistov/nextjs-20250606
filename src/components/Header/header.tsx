'use client';

import { Link } from '../Link/link';
import styles from './header.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href='/' className={styles.logo}>
          TENNIS STORE
        </Link>
        
        <nav className={styles.nav}>
          <Link href='/'>
            Home
          </Link>
          <Link href='/rackets'>
            Rackets
          </Link>
          <Link href='/about'>
            About
          </Link>
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