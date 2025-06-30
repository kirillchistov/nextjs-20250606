import { RacketGrid } from '../../../components/RacketGrid/racket-grid';
import { getTop10Rackets } from '../../../services/get-top-10-rackets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 Rackets at random',
};

const RacketsTop10Page = async () => {
  const { isError, data = [] } = await getTop10Rackets();

  if (isError) {
    return "error";
  }

  return <RacketGrid rackets={data} />;
};

export default RacketsTop10Page;