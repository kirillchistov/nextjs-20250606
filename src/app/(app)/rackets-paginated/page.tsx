'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page') || '1';
    router.replace(`/rackets?page=${page}`);
  }, [router, searchParams]);

  return <p>Redirecting to rackets...</p>;
}
