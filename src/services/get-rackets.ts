import { IRacket, Response } from '../types/index';
import { BASE_API_URL } from '../constants/api';

interface Params {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
}: Params): Promise<Response<IRacket[]>> => {
  const result = await fetch(
    `{BASE_API_URL}/products?page=${page}&limit=${limit}`
  );

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};