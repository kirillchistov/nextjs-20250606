"use client"

import { useParams } from 'next/navigation';
import { initialRackets } from '../../data/mock';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';

export default function RacketPage() {
  const params = useParams();
  const racketId = parseInt(params.racketId as string);
  const racket = initialRackets.find(r => r.id === racketId);
  console.log(racket);

  if (!racket) {
    return (
      <div className={styles.notFound}>
        <h2>Racket not found</h2>
        <Link href="/">Back home</Link>
      </div>
    );
  }

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
          
          {/* <div className={styles.addToCart}>
            <div className={styles.quantitySelector}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <button className={styles.addButton}>Add to Cart</button>
          </div> */}
        </div>

        <div className={styles.racketImages}>
          <div className={styles.mainImage}>
            <div className={styles.placeholder}>
              <Link href={`/racket/${racket.id}`} passHref>
                <Image
                    src={racket.imageUrl}
                    width={450}
                    height={450}
                    alt={racket.name}
                />
              </Link>
            </div>
          </div>
          {/*
          // Add thumbnails for other item images later
          <div className={styles.thumbnailContainer}>
            {[1, 2, 3].map((index) => (
              <div key={index} className={styles.thumbnail}>
                <div className={styles.placeholderSmall}></div>
              </div>
            ))}
          </div>
          */}
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
      {/* 
      // Add related items later
      <div className={styles.relatedRackets}>
        <h2 className={styles.relatedTitle}>Related Rackets</h2>
        <div className={styles.relatedGrid}>
          {initialRackets
            .filter(r => r.id !== racket.id && r.brandId === racket.brandId)
            .slice(0, 3)
            .map(related => (
              <Link key={related.id} href={`/rackets/${related.id}`} className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <div className={styles.placeholderSmall}></div>
                </div>
                <div className={styles.relatedInfo}>
                  <h3 className={styles.relatedName}>{related.name}</h3>
                  <p className={styles.relatedPrice}>${related.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
        </div>
      </div> 
      */}
    </div>
  );
}

