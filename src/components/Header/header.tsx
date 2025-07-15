'use client';

import { use } from 'react';
import { Link } from '../Link/link';
import { UserContext } from '../../providers/user';
import styles from './header.module.css';

export default function Header() {
  const { user } = use(UserContext);
  console.log(user?.email);

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
          {!user ? (
            <>
              <Link href='/sign-in' className={styles.navLink}>Login</Link>
              <Link href='/sign-up' className={styles.navLink}>Signup</Link>
            </>
          ) : (
            <>
              <Link href='/logout' className={styles.navLink}>Logout</Link>
            </>
          )}
          {/* <button className={styles.iconButton}>
            <span className={styles.icon}>🔍</span>
          </button> */}
          <button className={styles.iconButton}>
            <span className={styles.icon}>🛒</span>
            <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}