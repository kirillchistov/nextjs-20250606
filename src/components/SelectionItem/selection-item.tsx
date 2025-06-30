import { FC } from 'react';
import { Link } from '../Link/link';
import Image from 'next/image';
import { IRacket } from '../../types/index';
import styles from './selection.module.css';

type Props = {
  racket: IRacket;
};

export const SelectionItem: FC<Props> = ({ racket }) => {
  const { imageUrl, name, id } = racket;

  return (
    <div className={styles.root}>
      <Link href={`/racket/${id}`} >
        <Image
            src={imageUrl}
            width={350}
            height={350}
            alt={name}
            className={styles.image}
        />
      </Link>
      <Link href={`/racket/${id}`}>{name}</Link>
    </div>
  );
};