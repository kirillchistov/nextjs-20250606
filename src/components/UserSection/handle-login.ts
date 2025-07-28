import { BASE_API_URL } from '../../constants/api';

export const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: 'include',
    method: "DELETE",
  });

  location.assign('/');
};