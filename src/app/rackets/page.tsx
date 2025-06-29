// import RacketGrid from '../../components/RacketGrid/rackets';
import { SelectedItem } from '../../components/SelectedItem/selected';
import { rackets } from '../../constants/mock';


export default function RacketsPage() {
  return (
    <main>
      {rackets.map((racket) => (
        <SelectedItem key={racket.id} racket={racket} />
      ))}
    </main>
  );
}