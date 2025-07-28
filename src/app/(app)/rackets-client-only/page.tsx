'use client';

import dynamic from 'next/dynamic';

const RacketsClientOnly = dynamic(
  () => import('../../../components/Rackets/rackets-container-client'),
  { ssr: false, loading: () => <div>Loading dynamic...</div> }
);

const Page = () => {
  <RacketsClientOnly />;
};

export default Page;