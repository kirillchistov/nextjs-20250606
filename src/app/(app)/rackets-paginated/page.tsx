import { FC, Suspense } from 'react';
import { RacketsContainer } from './container';
import { SWRConfig } from 'swr';
import { LIMIT } from './constants';
import { getRackets } from '@/services/get-rackets';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ racketId: string }>;
}

const Page: FC<Props> = async ({ searchParams }) => {
  const { page = '1' } = await searchParams;

  let pageNumber = 1;
  if (typeof page === 'string') {
    pageNumber = parseInt(page) || 1;
  }

  return (
    <Suspense fallback='Rackets with pagination loading ...'>
      <SWRConfig
        value={{
          fallback: {
            [`products?page=${page}&limit=${LIMIT}`]: getRackets({
              page: pageNumber,
              limit: LIMIT,
            }),
          },
        }}
      >
        <RacketsContainer />
      </SWRConfig>
    </Suspense>
  );
};

export default Page;