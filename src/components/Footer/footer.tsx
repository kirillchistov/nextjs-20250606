import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>TENNIS STORE</h3>
        </div>
      </div>        
      <div className={styles.footerBottom}>
        <p>© 2025 Tennis Store. All rights reserved.</p>
      </div>
    </footer>
  );
}