import { Brand } from '@/types';
import styles from './filter.module.css';

interface BrandFilterProps {
  brands: Brand[];
  selectedBrands: number[];
  onBrandToggle: (brandId: number) => void;
}

export default function BrandFilter({ 
  brands, 
  selectedBrands, 
  onBrandToggle 
}: BrandFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>Filters</h3>
      </div>
      
      <div className={styles.filterGroup}>
        <h4 className={styles.groupTitle}>Brand</h4>
        <div className={styles.brandList}>
          {brands.map(brand => (
            <div key={brand.id} className={styles.brandItem}>
              <input
                type="checkbox"
                id={`brand-${brand.id}`}
                checked={selectedBrands.includes(brand.id)}
                onChange={() => onBrandToggle(brand.id)}
                className={styles.checkbox}
              />
              <label htmlFor={`brand-${brand.id}`} className={styles.brandLabel}>
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>      
      <div className={styles.buttonContainer}>
        <button className={styles.clearButton} onClick={() => onBrandToggle(0)}>
          Reset all
        </button>
      </div>
    </div>
  );
}