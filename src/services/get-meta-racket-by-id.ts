import { BASE_API_URL } from '../constants/api';
import { isDemoMode } from '../constants/demo';
import { IRacket, Response } from '../types/index';
import { getDemoRacketById } from './demo-store';

type Params = {
  id: string;
};

export const getMetaRacketById = async ({
  id,
}: Params): Promise<Response<IRacket>> => {
  if (isDemoMode()) {
    const data = getDemoRacketById(id);

    return { isError: false, data };
  }

  const result = await fetch(`${BASE_API_URL}/meta/product/${id}`, {
    next: {
      revalidate: 20,
    },
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};