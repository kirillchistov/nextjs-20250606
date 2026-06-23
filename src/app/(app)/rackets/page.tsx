import { Metadata } from 'next';
import Link from 'next/link';
import { LIMIT } from './constants';
import { getBrands } from '../../../services/get-brands';
import { getRackets } from '../../../services/get-rackets';
import BrandFilter from '../../../components/BrandFilter/filter';
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

const getSelectedBrand = (brand?: string | string[]) => {
  if (Array.isArray(brand)) {
    return brand[0];
  }

  return brand;
};

const getPageHref = (page: number, brand?: string) => {
  const searchParams = new URLSearchParams({ page: String(page) });

  if (brand) {
    searchParams.set('brand', brand);
  }

  return `/rackets?${searchParams}`;
};

const RacketsPage = async ({ searchParams }: Props) => {
  const { page, brand } = await searchParams;
  const pageNumber = getPageNumber(page);
  const selectedBrand = getSelectedBrand(brand);
  const [racketsResponse, brandsResponse] = await Promise.all([
    getRackets({ page: pageNumber, limit: LIMIT, brand: selectedBrand }),
    getBrands(),
  ]);

  if (!racketsResponse.data) {
    return 'No rackets fetched';
  }

  const rackets = racketsResponse.data;
  const brands = brandsResponse.data ?? [];

  return (
    <div>
      {brands.length > 0 && (
        <BrandFilter brands={brands} selectedBrand={selectedBrand} />
      )}
      {rackets.length > 0 ? <RacketGrid rackets={rackets} /> : 'No rackets found'}
      <nav className={styles.paginateBlock} aria-label='Rackets pagination'>
        {pageNumber > 1 && (
          <Link className={styles.paginateButton} href={getPageHref(pageNumber - 1, selectedBrand)}>
            Prev
          </Link>
        )}
        <span>{pageNumber}</span>
        {rackets.length >= LIMIT && (
          <Link className={styles.paginateButton} href={getPageHref(pageNumber + 1, selectedBrand)}>
            Next
          </Link>
        )}
      </nav>
    </div>
  );
};

export default RacketsPage;