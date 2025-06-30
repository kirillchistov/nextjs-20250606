import { BASE_API_URL } from '../constants/api';
import { IRacket, Response } from '../types/index';

type Params = {
  id: string;
};

export const getMetaRacketById = async ({
  id,
}: Params): Promise<Response<IRacket>> => {
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