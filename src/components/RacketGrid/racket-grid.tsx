import { FC } from 'react';
import { Link } from '../Link/link';

import { IRacket } from '../../types/index';
import { SelectedItem } from '../SelectedItem/selected';
import styles from '../ProductGrid/products.module.css';

type Props = {
  rackets: IRacket[];
}

export const RacketGrid: FC<Props> = ({ rackets }) => {

  return (
    <section className={styles.section}>      
      <div className={styles.header}>
        <div className={styles.title}><Link href='/rackets'>View All &#8599;</Link></div>
      </div>
      <div className={styles.filterGrid}>
        {rackets.map((racket: IRacket) => (
          <SelectedItem key={racket.id} racket={racket} />
        ))}
      </div>
    </section>
  );
}
