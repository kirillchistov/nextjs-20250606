import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hot Collection</h1>
        <p className={styles.heroSubtitle}>Discover our new arrivals</p>
        <button className={styles.heroButton}>SHOP NOW</button>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
}