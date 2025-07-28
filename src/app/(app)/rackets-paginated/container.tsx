'use client';

import { FC } from 'react';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { BASE_API_URL } from '../../../constants/api';
import { LIMIT } from './constants';
import { RacketGrid } from '../../../components/RacketGrid/racket-grid';

import styles from '../../../components/RacketGrid/racket-grid.module.css';

const fetcher = async (path: string) => {
  const response = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: 'include',
  });

  const result = await response.json();

  return { data: result };
};

export const RacketsContainer: FC = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '') || 1;

  const { data, error, isLoading } = useSWR(
    `products?page=${page}&limit=${LIMIT}`,
    fetcher,
    {
      revalidateIfStale: false,
    }
  );

  const updatePage = (page: number) => {
    window.history.pushState({}, '', `?page=${page}&limit=${LIMIT}`);
    // router.push(`/rackets-paginated?page=${page}&limit=${LIMIT}`);
  };

  const rackets = data?.data;

  if (error) {
    return 'error';
  }

  if (isLoading && !rackets?.length) {
    return 'The page is loading';
  }

  if (!rackets?.length) {
    return 'no data';
  }

  return (
    <div>
      <RacketGrid rackets={rackets} />
      <div className={styles.paginateBlock}>
        {page > 1 && <button className={styles.paginateButton}
          onClick={() => updatePage(page - 1)}>Prev</button>}
        <span>{page}</span>
        {rackets.length >= LIMIT && (
          <button className={styles.paginateButton}
            onClick={() => updatePage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};