import { IRacket, Response } from '../types/index';
import { BASE_API_URL } from '../constants/api';
import { isDemoMode } from '../constants/demo';
import { getDemoRackets } from './demo-store';
import { cookies } from 'next/headers';

interface Params {
  page?: number;
  limit?: number;
  brand?: string;
}

export const getRackets = async ({
  page = 1,
  limit = 4,
  brand,
}: Params): Promise<Response<IRacket[]>> => {
  if (isDemoMode()) {
    return { isError: false, data: getDemoRackets({ page, limit, brand }) };
  }

  const cookieStore = await cookies();
  const searchParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (brand) {
    searchParams.set('brand', brand);
  }

  const result = await fetch(`${BASE_API_URL}/products?${searchParams}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};