import { FC } from 'react';

import styles from './selected.module.css';
import { Link } from '../Link/link';
import { IRacket } from '../../types/index';

type Props = {
  racket: IRacket;
};

export const SelectedItem: FC<Props> = ({ racket }) => {
  const { imageUrl, name, id } = racket;

  return (
    <div className={styles.root}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <Link href={`/racket/${id}`}>{name}</Link>
    </div>
  );
};