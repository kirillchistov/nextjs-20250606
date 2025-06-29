import { IRacket, Response } from '../types/index';
import { BASE_API_URL } from '../constants/api';

export const getTop10Rackets = async (): Promise<Response<IRacket[]>> => {
  const result = await fetch(`{BASE_API_URL}/api/top-10`);

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};