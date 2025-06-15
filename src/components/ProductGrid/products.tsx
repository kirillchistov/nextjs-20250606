import Link from 'next/link';
import ProductCard from '../ProductCard/product';
import rackets from '../../app/data/mock'
import styles from './products.module.css';
// import { Racket } from '../../types';

// const products: Product[] = [
//   { id: 1, name: 'Classic T-Shirt', price: 29.99 },
//   { id: 2, name: 'Premium Jacket', price: 89.99 },
//   { id: 3, name: 'Slim Fit Jeans', price: 59.99 },
//   { id: 4, name: 'Sport Shorts', price: 39.99 },
//   { id: 5, name: 'Cotton Hoodie', price: 49.99 },
//   { id: 6, name: 'Running Shoes', price: 79.99 },
// ];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.sectionLink}><Link href="/" className={styles.navLink}>View All &#8599;</Link></div>
      </div>
      <div className={styles.grid}>
        {rackets.map(racket => (
          <ProductCard key={racket.id} racket={racket} />
        ))}
      </div>
    </section>
  );
}