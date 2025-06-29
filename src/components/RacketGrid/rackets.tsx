'use client'

import { useState } from 'react';
import ProductCard from '../ProductCard/product';
import BrandFilter from '../BrandFilter/filter';
import styles from '../ProductGrid/products.module.css';
import { initialRackets, brands } from '../../app/data/mock';
import { IRacket } from '@/types';

export default function RacketGrid() {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  
  const filteredRackets: IRacket[] = selectedBrands.length === 0
    ? initialRackets
    : initialRackets.filter(r => selectedBrands.includes(r.brand.id));

  const handleBrandToggle = (brandId: number) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId) 
        : [...prev, brandId]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Tennis Rackets</h2>
        <div className={styles.resultsCount}>{filteredRackets.length} rackets</div>
      </div>
      
      <div className={styles.filterGrid}>
        <BrandFilter 
          brands={brands} 
          selectedBrands={selectedBrands} 
          onBrandToggle={handleBrandToggle} 
        />
        
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {filteredRackets.map(racket => (
              <ProductCard key={racket.id} racket={racket} />
            ))}
          </div>
          
          {filteredRackets.length === 0 && (
            <div className={styles.noResults}>
              <p>No rackets match your filters</p>
              <button onClick={clearFilters} className={styles.clearButton}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
