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
      
      {/* 
      // Add other filters later
      <div className={styles.filterGroup}>
        <h4 className={styles.groupTitle}>Player Type</h4>
        <div className={styles.optionList}>
          <div className={styles.optionItem}>
            <input type="checkbox" id="player-beginner" className={styles.checkbox} />
            <label htmlFor="player-beginner" className={styles.optionLabel}>Beginner</label>
          </div>
          <div className={styles.optionItem}>
            <input type="checkbox" id="player-intermediate" className={styles.checkbox} />
            <label htmlFor="player-intermediate" className={styles.optionLabel}>Intermediate</label>
          </div>
          <div className={styles.optionItem}>
            <input type="checkbox" id="player-advanced" className={styles.checkbox} />
            <label htmlFor="player-advanced" className={styles.optionLabel}>Advanced</label>
          </div>
        </div>
      </div>
      */}
      
      {/* <div className={styles.filterGroup}>
        <h4 className={styles.groupTitle}>Head Size</h4>
        <div className={styles.optionList}>
          <div className={styles.optionItem}>
            <input type="checkbox" id="size-midsize" className={styles.checkbox} />
            <label htmlFor="size-midsize" className={styles.optionLabel}>Midsize (85-95 sq in)</label>
          </div>
          <div className={styles.optionItem}>
            <input type="checkbox" id="size-midplus" className={styles.checkbox} />
            <label htmlFor="size-midplus" className={styles.optionLabel}>Midplus (96-105 sq in)</label>
          </div>
          <div className={styles.optionItem}>
            <input type="checkbox" id="size-oversize" className={styles.checkbox} />
            <label htmlFor="size-oversize" className={styles.optionLabel}>Oversize (106+ sq in)</label>
          </div>
        </div>
      </div> */}
      <div className={styles.buttonContainer}>
        <button className={styles.clearButton} onClick={() => onBrandToggle(0)}>
          Reset all
        </button>
      </div>
    </div>
  );
}