import { BASE_API_URL } from '../constants/api';
import { isDemoMode } from '../constants/demo';
import { Response, IUser } from '../types/index';
import { cookies } from 'next/headers';

export const getUser = async (): Promise<Response<IUser>> => {
  if (isDemoMode()) {
    return { isError: false, data: undefined };
  }

  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/auth/user`, {
    credentials: 'include',
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();

  return { isError: false, data: data.user };
};