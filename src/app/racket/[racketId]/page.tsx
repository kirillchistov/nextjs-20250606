
import { initialRackets } from '../../data/mock';
import Image from 'next/image';
import Link from 'next/link';
import NotFound from './not-found';
import styles from './style.module.css';

type racketProps = {
  params: Promise<{ racketId: string }>;
  searchParams: Promise<Record<string, string>>;
};

export const generateStaticParams = () => {
  const idsToGenerate = initialRackets.slice(2, 6);

  return idsToGenerate.map((racket) => ({
    racketId: racket.id.toString(),
  }));
};

export default async function RacketPage({ params }: racketProps) {
  const { racketId } = await params;

  const racket = initialRackets.find(r => r.id === Number(racketId));

  if (!racket) return <NotFound /> 

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> / <Link href="/rackets">Rackets</Link> / {racket.name}
      </div>
      
      <div className={styles.racketContainer}>
        <div className={styles.racketInfo}>
          <div className={styles.brandBadge}>
            {racket.brand.name}
          </div>
          
          <h1 className={styles.racketName}>{racket.name}</h1>
          <p className={styles.description}>{racket.description}</p>
          <div className={styles.specs}>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Type:</span>
              <span className={styles.specValue}>{racket.type}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Model:</span>
              <span className={styles.specValue}>{racket.model}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Year:</span>
              <span className={styles.specValue}>{racket.year}</span>
            </div>
          </div>
        </div>

        <div className={styles.racketImages}>
          <div className={styles.mainImage}>
            <div className={styles.placeholder}>
              <Link href={`/racket/${racket.id}`} >
                <Image
                    src={racket.imageUrl}
                    width={450}
                    height={450}
                    alt={racket.name}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.priceInfo}>          
          <div className={styles.priceSection}>
            <span className={styles.price}>${racket.price.toFixed(2)}</span>
          </div>
        </div>

      </div>
      <div className={styles.addToCart}>
        <div className={styles.quantitySelector}>
          <button className={styles.quantityButton}>-</button>
          <span className={styles.quantity}>1</span>
          <button className={styles.quantityButton}>+</button>
        </div>
        <button className={styles.addButton}>Add to Cart</button>
      </div>      
    </div>
  );
}
