'use client';

import { use, useTransition } from 'react';
import { BASE_API_URL } from '../../../constants/api';
import { UserContext } from '../../../providers/user';
import styles from './logout.module.css';

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: 'include',
    method: 'DELETE',
  });

  location.assign('/');
};

const Logout = () => {
  const { user } = use(UserContext);

  const [isPending, startTransition] = useTransition();

  if (!user) {
    return;
  }
  return (
    <>
      <h3>Are you sure you want to logout?</h3>
      <button className={styles.logoutButton}
        disabled={isPending} onClick={() => startTransition(handleLogout)}>
        Logout
      </button>
    </>
  );
};

export default Logout;