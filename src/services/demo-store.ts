import { rackets as mockRackets } from '../constants/mock';
import { Brand, IRacket } from '../types';

const withDemoAssets = (racket: (typeof mockRackets)[number]): IRacket => ({
  ...racket,
  imageUrl: `https://placehold.co/350x350/f8f8f8/333333/png?text=${encodeURIComponent(racket.brand.name)}`,
});

const allRackets: IRacket[] = mockRackets.map(withDemoAssets);

const demoBrands: Brand[] = Array.from(
  new Map(allRackets.map((racket) => [racket.brand.id, racket.brand])).values()
);

interface GetRacketsParams {
  page?: number;
  limit?: number;
  brand?: string;
}

export const getDemoBrands = (): Brand[] => demoBrands;

export const getDemoRackets = ({
  page = 1,
  limit = 6,
  brand,
}: GetRacketsParams): IRacket[] => {
  const filtered = brand
    ? allRackets.filter((racket) => racket.brand.name === brand)
    : allRackets;

  const offset = (page - 1) * limit;

  return filtered.slice(offset, offset + limit);
};

export const getDemoTop10Rackets = (): IRacket[] =>
  allRackets.filter((racket) => racket.top10);

export const getDemoRacketById = (id: string): IRacket | undefined =>
  allRackets.find((racket) => String(racket.id) === id);

export const getDemoRacketIds = (): string[] =>
  allRackets.map((racket) => String(racket.id));
