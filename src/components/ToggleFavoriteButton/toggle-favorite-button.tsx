'use client';

import { IRacket } from '../../types/index';
import { FC } from 'react';
import {
  useIsFavoriteById,
  useSetIsFavorite,
} from '../../providers/favorite/hooks';
import { handleFavorite } from './handle-favorite';

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
    // handle response status
    await handleFavorite({ isFavorite, racketId });
  };

  return (
    <button onClick={() => handleClick(isFavorite)}>
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};