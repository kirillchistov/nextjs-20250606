import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>TENNIS STORE</h3>
          <p className={styles.footerText}>
            Premium e-commerce experience
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Links</h4>
          <ul className={styles.footerList}>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Newsletter</h4>
          <div className={styles.newsletter}>
            <input 
              type="email" 
              placeholder="Your email" 
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2025 Tennis Store. All rights reserved.</p>
      </div>
    </footer>
  );
}