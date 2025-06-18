import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/product';
import BrandFilter from '../BrandFilter/filter';
import { Product, Racket, Brand } from '../../types';
import rackets from '../../app/data/mock'
import styles from '../ProductGrid/products.module.css';
// import { Racket } from '../../types';


// const initialProducts: Product[] = [
//   {
//     id: 15,
//     name: "Yonex Ezone 98 2024",
//     price: 265,
//     type: "racket",
//     model: "Ezone 98",
//     year: 2024,
//     top10: true,
//     description: "Yonex Ezone 98 2024 — ракетка с отличной мощностью и контролем, созданная для игроков среднего и продвинутого уровня.",
//     brandId: 3,
//     brand: {
//       id: 3,
//       name: "Yonex"
//     }
//   },
//   {
//     id: 16,
//     name: "Babolat Pure Drive",
//     price: 249,
//     type: "racket",
//     model: "Pure Drive",
//     year: 2023,
//     top10: true,
//     description: "The iconic racket known for power and spin.",
//     brandId: 1,
//     brand: {
//       id: 1,
//       name: "Babolat"
//     }
//   },
//   {
//     id: 17,
//     name: "Wilson Pro Staff",
//     price: 279,
//     type: "racket",
//     model: "Pro Staff",
//     year: 2024,
//     top10: true,
//     description: "Precision and control for advanced players.",
//     brandId: 2,
//     brand: {
//       id: 2,
//       name: "Wilson"
//     }
//   },
//   {
//     id: 18,
//     name: "Head Speed MP",
//     price: 229,
//     type: "racket",
//     model: "Speed MP",
//     year: 2023,
//     top10: false,
//     description: "Great maneuverability and power combination.",
//     brandId: 4,
//     brand: {
//       id: 4,
//       name: "Head"
//     }
//   },
//   {
//     id: 19,
//     name: "Prince Textreme Tour",
//     price: 199,
//     type: "racket",
//     model: "Textreme Tour",
//     year: 2023,
//     top10: false,
//     description: "Comfortable and powerful racket with great feel.",
//     brandId: 5,
//     brand: {
//       id: 5,
//       name: "Prince"
//     }
//   },
//   {
//     id: 20,
//     name: "Dunlop CX 200",
//     price: 219,
//     type: "racket",
//     model: "CX 200",
//     year: 2024,
//     top10: true,
//     description: "Control-oriented racket with excellent feel.",
//     brandId: 6,
//     brand: {
//       id: 6,
//       name: "Dunlop"
//     }
//   },
// ];

export default function ProductFilter() {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(rackets);
  
  // Extract unique brands
  const brands: Brand[] = Array.from(
    new Map(rackets.map(p => [p.brand.id, p.brand])).values()
  );

  const handleBrandToggle = (brandId: number) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId) 
        : [...prev, brandId]
    );
  };

  useEffect(() => {
    if (selectedBrands.length === 0) {
      setFilteredProducts(rackets);
    } else {
      setFilteredProducts(
        rackets.filter(p => selectedBrands.includes(p.brand.id))
    }
  }, [selectedBrands]);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      
      <div className={styles.filterGrid}>
        <BrandFilter 
          brands={brands} 
          selectedBrands={selectedBrands} 
          onBrandToggle={handleBrandToggle} 
        />
        
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} racket={product} />
          ))}
        </div>
      </div>
    </section>
  );
}