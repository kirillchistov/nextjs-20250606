export interface IRacket {
  id: string | number;
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

export type Response<Entity> = {
    isError: boolean;
    data?: Entity;
}

export type racketProps = {
  params: Promise<{ racketId: string }>;
  searchParams: Promise<Record<string, string>>;
};