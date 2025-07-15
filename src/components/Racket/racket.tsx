'use client';

import { IRacket } from '../../types/index';
import Image from 'next/image';
import Link from 'next/Link';
import { FC, use } from 'react';
import { UserContext } from '../../providers/user/index';

import styles from './racket.module.css';

type Props = {
  racket: IRacket;
};

export const Racket: FC<Props> = ({ racket }) => {
  const { isAuthorized } = use(UserContext);

  const { name, imageUrl, description, type, brand, price, model, id, year } = racket;

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link href='/'>Home</Link> / <Link href='/rackets'>Rackets</Link> / {name}
        </div>    
        <div className={styles.racketContainer}>
          <div className={styles.racketInfo}>
            <div className={styles.brandBadge}>
              {brand.name} ({id})
            </div>          
            <h1 className={styles.racketName}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.specs}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Type:</span>
                <span className={styles.specValue}>{type}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Model:</span>
                <span className={styles.specValue}>{model}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Year:</span>
                <span className={styles.specValue}>{year}</span>
              </div>
            </div>
          </div>
          <div className={styles.racketImages}>
            <div className={styles.mainImage}>
              <div className={styles.placeholder}>
                <Image
                    src={imageUrl}
                    width={350}
                    height={350}
                    alt={name}
                />
              </div>
            </div>
          </div>
          <div className={styles.priceInfo}>          
            <div className={styles.priceSection}>
              <span className={styles.price}>${price.toFixed(2)}</span>
            </div>
            <div className={styles.addToCart}>
              {/* <div className={styles.quantitySelector}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.quantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div> */}
              <div>
                {/* <button className={styles.addButton}>Add to Cart</button> */}
                {isAuthorized && (
                  <button className={styles.addButton}>Add to Favorites</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};