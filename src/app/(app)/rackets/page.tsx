import { Metadata } from 'next';
import Link from 'next/link';
import { LIMIT } from './constants';
import { getRackets } from '../../../services/get-rackets';
import { RacketGrid } from '../../../components/RacketGrid/racket-grid';
import styles from '../../../components/RacketGrid/racket-grid.module.css';

export const metadata: Metadata = {
  title: 'The best selection of Tennis Rackets',
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getPageNumber = (page?: string | string[]) => {
  if (Array.isArray(page)) {
    return 1;
  }

  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    return 1;
  }

  return pageNumber;
};

const getPageHref = (page: number) => `/rackets?page=${page}`;

const RacketsPage = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const pageNumber = getPageNumber(page);
  const { data } = await getRackets({ page: pageNumber, limit: LIMIT });

  if (!data) {
    return 'No rackets fetched';
  }

  if (!data.length) {
    return 'No rackets found';
  }

  return (
    <div>
      <RacketGrid rackets={data} />
      <nav className={styles.paginateBlock} aria-label='Rackets pagination'>
        {pageNumber > 1 && (
          <Link className={styles.paginateButton} href={getPageHref(pageNumber - 1)}>
            Prev
          </Link>
        )}
        <span>{pageNumber}</span>
        {data.length >= LIMIT && (
          <Link className={styles.paginateButton} href={getPageHref(pageNumber + 1)}>
            Next
          </Link>
        )}
      </nav>
    </div>
  );
};

export default RacketsPage;