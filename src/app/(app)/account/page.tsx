'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';
import { UserContext } from '../../../providers/user';

const Account = () => {
  const { user } = use(UserContext);

  if (!user) {
    redirect('/sign-in');
  }

  return <h2>User account page</h2>;
};

export default Account;