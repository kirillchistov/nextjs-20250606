import { FC } from 'react';
import { Metadata } from 'next';
import { SWRConfig } from 'swr';
import { LIMIT } from './constants';
import { getKey } from './get-key';
import { getRackets } from '../../../services/get-rackets';
import { RacketsContainerClient } from '../../../components/Rackets/rackets-container-client';
import { unstable_serialize } from 'swr/infinite';

// import { RacketGrid } from '../../../components/RacketGrid/racket-grid';

export const metadata: Metadata = {
  title: 'The best selection of Tennis Rackets',
};


const RacketsPage: FC = async () => {
  const { data } = await getRackets({ page: 1, limit: LIMIT });
  
  if (!data) {
    return 'No rackets fetched';
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(getKey(data))]: data,
        },
        revalidateOnFocus: false,
      }}
    >
      <RacketsContainerClient initialData={data} />
    </SWRConfig>
  );
}

export default RacketsPage;