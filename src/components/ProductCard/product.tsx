import { Racket } from '../../types';
import Image from 'next/image';
import styles from './product.module.css';

interface ProductCardProps {
  racket: Racket;
}

export default function ProductCard({ racket }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <Image
            src={racket.imageUrl}
            width={250}
            height={250}
            alt={racket.name}
          />
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{racket.name}</h3>
        <p className={styles.price}>${racket.price.toFixed(2)}</p>
      </div>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
}