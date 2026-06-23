import { BASE_API_URL } from '../constants/api';
import { isDemoMode } from '../constants/demo';
import { Brand, Response } from '../types/index';
import { getDemoBrands } from './demo-store';

export const getBrands = async (): Promise<Response<Brand[]>> => {
  if (isDemoMode()) {
    return { isError: false, data: getDemoBrands() };
  }

  const result = await fetch(`${BASE_API_URL}/brands`);

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: Brand[] = await result.json();

  return { isError: false, data };
};
