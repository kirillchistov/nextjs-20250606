import { IRacket } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css';

interface ProductCardProps {
  racket: IRacket;
}

export default function ProductCard({ racket }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <Link href={`/racket/${racket.id}`} >
            <Image
                src={racket.imageUrl}
                width={250}
                height={250}
                alt={racket.name}
            />
          </Link>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.brand}>{racket.brand.name}</div>
        <h3 className={styles.name}>
          <Link href={`/racket/${racket.id}`} >
            {racket.name}
          </Link>
        </h3>
        <p className={styles.price}>${racket.price.toFixed(2)}</p>
      </div>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
}