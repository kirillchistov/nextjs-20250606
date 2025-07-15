'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';
import { UserContext } from '../../../providers/user';

const Admin = () => {
  const { user } = use(UserContext);

  if (!user?.isAdmin) {
    redirect('/sign-in');
  }

  return <h2>Admin page</h2>;
};

export default Admin;