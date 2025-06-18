import { Racket } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './racket.module.css';

interface ProductCardProps {
  racket: Racket;
}

export default function ProductPage({ racket }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <Link href={`/racket/${racket.id}`} passHref>
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
        <h3 className={styles.name}>
          <Link href={`/racket/${racket.id}`} passHref>
            {racket.name}
          </Link>
        </h3>
        <p className={styles.price}>${racket.price.toFixed(2)}</p>
      </div>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
}