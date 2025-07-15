import { getRackets } from '../../../services/get-rackets';
import { RacketGrid } from '../../../components/RacketGrid/racket-grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The best selection of Tennis Rackets',
};


const RacketsPage = async () => {
  const { isError, data = [] } = await getRackets({ limit: 20 });
  
  if (isError) {
    return 'error';
  }

  return (
    <main>
      <RacketGrid rackets={data} />
    </main>
  );
}

export default RacketsPage;