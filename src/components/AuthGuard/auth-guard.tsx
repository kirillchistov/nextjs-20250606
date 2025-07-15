'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';
import { UserContext } from '../../providers/user';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = use(UserContext);

  if (!user) {
    redirect('/sign-in');
  }

  return <>{children}</>;
}