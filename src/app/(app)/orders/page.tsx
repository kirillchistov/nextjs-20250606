'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';
import { UserContext } from '../../../providers/user';

const Orders = () => {
  const { user } = use(UserContext);

  if (!user) {
    redirect('/sign-in');
  }

  return <h2>User orders page</h2>;
};

export default Orders;