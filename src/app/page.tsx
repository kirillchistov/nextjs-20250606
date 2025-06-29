import { SelectedItem } from "../components/SelectedItem/selected";
import { Selection } from "../components/Selection/selection";
import { rackets } from "@/constants/mock";

export default function Home() {
  return (
    <main>
      <Selection title='Featured Rackets' hrefToAll='/rackets'>
        {rackets.slice(0, 5).map((racket) => (
          <SelectedItem key={racket.id} racket={racket} />
        ))}
      </Selection>
    </main>
  );
}
