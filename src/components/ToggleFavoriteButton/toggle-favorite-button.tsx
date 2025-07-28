'use client';

import { IRacket } from '../../types/index';
import { FC } from 'react';
import {
  useIsFavoriteById,
  useSetIsFavorite,
} from '../../providers/favorite/hooks';
import { handleFavorite } from './handle-favorite';

import styles from './toggle-favorite-button.module.css';

interface Props {
  isFavoriteInitial?: boolean;
  racketId: IRacket['id'];
}

export const ToggleFavoriteButton: FC<Props> = ({
  isFavoriteInitial = false,
  racketId,
}) => {
  const isFavorite = useIsFavoriteById({ id: racketId, isFavoriteInitial });
  const setIsFavorite = useSetIsFavorite();

  const handleClick = async (isFavorite: boolean) => {
    setIsFavorite({ id: racketId, isFavorite: !isFavorite });
    await handleFavorite({ isFavorite, racketId });
  };

  return (
    <button className={styles.addFavButton}
        onClick={() => handleClick(isFavorite)}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};