import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          TENNIS STORE
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/rackets" className={styles.navLink}>Rackets</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
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