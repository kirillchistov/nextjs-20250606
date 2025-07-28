'use client';

import { FC } from 'react';
import useSWRInfinite from 'swr/infinite';
import { BASE_API_URL } from '../../constants/api';
import { LIMIT } from '../../app/(app)/rackets/constants';
import { IRacket } from '../../types/index';
import { getKey } from '../../app/(app)/rackets/get-key';
import { RacketGrid } from '../RacketGrid/racket-grid';

import styles from './rackets-container-client.module.css';

const fetcher = async (path: string | IRacket[] | undefined) => {
  if (typeof path !== 'string' && path !== undefined) {
    return path;
  }

  const result = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: 'include',
  });

  return result.json();
};

interface Props {
  initialData: IRacket[];
}

export const RacketsContainerClient: FC<Props> = ({ initialData }) => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite<IRacket[]>(
    getKey(initialData),
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
      parallel: true,
    }
  );

  const rackets: IRacket[] = data ? ([] as IRacket[]).concat(...data) : [];

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < LIMIT);

  if (error) {
    return 'some error';
  }

  if (isLoading && !rackets.length) {
    return 'isInitialLoading...';
  }

  if (isEmpty) {
    return 'no rackets';
  }

  return (
    <div>
      <RacketGrid rackets={rackets} />
      {!isReachingEnd && (
        <button
          className={styles.button}
          disabled={isLoadingMore}
          onClick={() => setSize(size + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default RacketsContainerClient;