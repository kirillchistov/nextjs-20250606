import { IRacket } from '../../../types/index';
import { LIMIT } from './constants';

export const getKey = (initialData: IRacket[]) => {
  return (page: number) => {
    if (page === 0 && typeof window !== undefined && initialData) {
      return initialData;
    }

    return `products?page=${page + 1}&limit=${LIMIT}`;
  };
};