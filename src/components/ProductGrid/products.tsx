import Link from 'next/link';
import ProductCard from '../ProductCard/product';
import rackets from '../../app/data/mock'
import styles from './products.module.css';
// import { Racket } from '../../types';



export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.sectionLink}><Link href="/rackets" className={styles.navLink}>View All &#8599;</Link></div>
      </div>
      <div className={styles.grid}>
        {rackets.map(racket => (
          <ProductCard key={racket.id} racket={racket} />
        ))}
      </div>
    </section>
  );
}