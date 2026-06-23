import { Brand } from '@/types';
import Link from 'next/link';
import styles from './filter.module.css';

interface BrandFilterProps {
  brands: Brand[];
  selectedBrand?: string;
}

export default function BrandFilter({ brands, selectedBrand }: BrandFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>Filter:</h3>
      </div>
      
      <div className={styles.filterGroup}>
        <h4 className={styles.groupTitle}>Brand</h4>
        <div className={styles.brandList}>
          {brands.map(brand => (
            <div key={brand.id} className={styles.brandItem}>
              <input
                type='checkbox'
                id={`brand-${brand.id}`}
                checked={selectedBrand === brand.name}
                readOnly
                className={styles.checkbox}
              />
              <Link
                href={`/rackets?page=1&brand=${encodeURIComponent(brand.name)}`}
                className={styles.brandLabel}
              >
                {brand.name}
              </Link>
            </div>
          ))}
        </div>
      </div>      
      <div className={styles.buttonContainer}>
        <Link className={styles.clearButton} href='/rackets?page=1'>
          Reset all
        </Link>
      </div>
    </div>
  );
}