import { SelectedItem } from '../components/SelectedItem/selected';
import { Selection } from '../components/Selection/selection';
import { getRackets } from '../services/get-rackets';
import { getTop10Rackets } from '../services/get-top-10-rackets';
import styles from './page.module.css';

const Home = async () => {
  const racketsPromise = getRackets({ limit: 10 });
  const racketsTop10Promise = getTop10Rackets();

  const [
    { isError: isRacketsError, data: racketsData = [] },
    { isError: isRacketsTop10Error, data: racketsTop10Data = [] },
  ] = await Promise.all([racketsPromise, racketsTop10Promise]);

  return (
    <div className={styles.container}>
      {!isRacketsError && Boolean(racketsData?.length) && (
        <Selection title='Some Rackets' hrefToAll='/rackets'>
          {racketsData.map((racket) => (
            <SelectedItem key={racket.id} racket={racket} />
          ))}
        </Selection>
      )}

      {!isRacketsTop10Error && Boolean(racketsTop10Data?.length) && (
        <Selection title='Top 10 rackets' hrefToAll='/rackets/top-10'>
          {racketsTop10Data.map((racket) => (
            <SelectedItem key={racket.id} racket={racket} />
          ))}
        </Selection>
      )}
    </div>
  );
};

export default Home;
