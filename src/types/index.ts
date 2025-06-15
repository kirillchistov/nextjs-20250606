export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: Brand;
}

export interface Racket {
  id: number;
  name: string;
  price: number;
  brandId: number;
  brand: Brand;
  imageUrl: string;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;  
}

export interface Brand {
  id: number;
  name: string;
}