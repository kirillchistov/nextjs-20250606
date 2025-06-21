// import { IRacket } from "../types/index";
// import { racketResponse } from "../types/index";

// type Params = {
//   id: string;
// };

// export const getRacketById = async ({
//   id,
// }: Params): Promise<racketResponse<IRacket>> => {
//   const result = await fetch(`${BASE_API_URL}/product/${id}`);

//   if (result.status === 404) {
//     return { isError: false, data: undefined };
//   }

//   if (!result.ok) {
//     return { isError: true, data: undefined };
//   }

//   const data: { product: IRacket } = await result.json();

//   return { isError: false, data: data.product };
// };