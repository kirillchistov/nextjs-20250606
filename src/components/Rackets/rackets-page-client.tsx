'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LIMIT } from '@/app/(app)/rackets/constants';
import BrandFilter from '@/components/BrandFilter/filter';
import { RacketGrid } from '@/components/RacketGrid/racket-grid';
import { getDemoBrands, getDemoRackets } from '@/services/demo-store';
import styles from '@/components/RacketGrid/racket-grid.module.css';

const getPageHref = (page: number, brand?: string) => {
  const searchParams = new URLSearchParams({ page: String(page) });

  if (brand) {
    searchParams.set('brand', brand);
  }

  return `/rackets?${searchParams}`;
};

export default function RacketsPageClient() {
  const searchParams = useSearchParams();
  const pageNumber = Number(searchParams.get('page')) || 1;
  const selectedBrand = searchParams.get('brand') ?? undefined;

  const rackets = useMemo(
    () => getDemoRackets({ page: pageNumber, limit: LIMIT, brand: selectedBrand }),
    [pageNumber, selectedBrand]
  );
  const brands = useMemo(() => getDemoBrands(), []);

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
}
