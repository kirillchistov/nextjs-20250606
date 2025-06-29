import { BASE_API_URL } from "../constants/api";
import { IRacket, Response } from "../types/racket";

type Params = {
  id: string;
};

export const getRacketByIdSlow = async ({
  id,
}: Params): Promise<Response<IRacket>> => {
  const result = await fetch(`${BASE_API_URL}/product-slow/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};