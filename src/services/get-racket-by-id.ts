import { BASE_API_URL } from "../constants/api";
import { IRacket, Response } from "../types/index";
import { cookies } from 'next/headers';

type Params = {
  id: string;
};

export const getRacketById = async ({
  id,
}: Params): Promise<Response<IRacket>> => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/product/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
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