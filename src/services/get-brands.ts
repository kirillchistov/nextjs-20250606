import { BASE_API_URL } from '../constants/api';
import { Brand, Response } from '../types/index';

export const getBrands = async (): Promise<Response<Brand[]>> => {
  const result = await fetch(`${BASE_API_URL}/brands`);

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: Brand[] = await result.json();

  return { isError: false, data };
};
