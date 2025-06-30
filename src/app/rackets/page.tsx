import { getRackets } from '../../services/get-rackets';
import { RacketGrid } from '../../components/RacketGrid/racket-grid';


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