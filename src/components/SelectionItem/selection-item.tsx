'use client';

import { FC, use } from 'react';
import { Link } from '../Link/link';
import Image from 'next/image';
import { IRacket } from '../../types/index';
import { UserContext } from "../../providers/user";
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
        <img
          src='http://localhost:4000/bookmark.png'
          alt='bookmark icon'
          className={styles.favoriteIcon}
        />
      )}

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
      {isAuthorized && (
        <ToggleFavoriteButton racketId={id} isFavoriteInitial={isFavorite} />
      )}
    </div>
  );
};