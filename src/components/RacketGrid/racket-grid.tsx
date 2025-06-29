import { FC } from 'react';
import { IRacket } from '../../types/index';
import { SelectedItem } from '../SelectedItem/selected';
import styles from '../ProductGrid/products.module.css';

  type Props = {
    rackets: IRacket[];
  }

export const RacketGrid: FC<Props> = ({ rackets }) => {

  return (
    <section className={styles.section}>      
      <div className={styles.filterGrid}>
        {rackets.map((racket: IRacket) => (
          <SelectedItem key={racket.id} racket={racket} />
        ))}
      </div>
    </section>
  );
}
