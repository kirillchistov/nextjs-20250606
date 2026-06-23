'use client';

import { FC, use } from 'react';
import { Link } from '../Link/link';
import Image from 'next/image';
import { IRacket } from '../../types/index';
import { UserContext } from "../../providers/user";
import { isDemoMode } from '../../constants/demo';
import {
  useHydrateFavorite,
  useIsFavoriteById,
} from '../../providers/favorite/hooks';
import { ToggleFavoriteButton } from '../ToggleFavoriteButton/toggle-favorite-button';

import styles from './selection.module.css';

type Props = {
  racket: IRacket;
};

export const SelectionItem: FC<Props> = ({ racket }) => {

  const { isAuthorized } = use(UserContext);

  const { imageUrl, name, id, userData } = racket;

  useHydrateFavorite({ racketId: id, isFavorite: userData?.isFavorite });

  const isFavorite = useIsFavoriteById({
    id,
    isFavoriteInitial: userData?.isFavorite,
  });

  return (
    <div className={styles.root}>
      {isFavorite && (
        isDemoMode() ? (
          <span className={styles.favoriteIcon} aria-label='bookmark icon'>★</span>
        ) : (
          <Image
            src='http://localhost:4000/bookmark.png'
            width={32}
            height={32}
            alt='bookmark icon'
            className={styles.favoriteIcon}
          />
        )
      )}

      <Link href={`/racket/${id}`} >
        <Image
            src={imageUrl}
            width={350}
            height={350}
            alt={name}
            className={styles.image}
            sizes='(max-width: 768px) 100vw, 300px'
        />
      </Link>
      <Link href={`/racket/${id}`}>{name}</Link>
      {isAuthorized && (
        <ToggleFavoriteButton racketId={id} isFavoriteInitial={isFavorite} />
      )}
    </div>
  );
};