import { Link } from '../Link/link';
import { UserSection } from '../UserSection/user-section';
import styles from './header.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href='/' className={styles.headerLogo}>
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
          <UserSection className={styles.userSection} />
          <button className={styles.iconButton}>
            <span className={styles.icon}>🛒</span>
            <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}