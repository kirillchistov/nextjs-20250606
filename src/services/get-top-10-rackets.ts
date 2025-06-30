import { IRacket, Response } from '../types/index';
import { BASE_API_URL, TOP_10_REQUEST_TAG } from '../constants/api';

export const getTop10Rackets = async (): Promise<Response<IRacket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`, {
    next: {
      tags: [TOP_10_REQUEST_TAG],
    },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};