import { SelectedItem } from "../components/SelectedItem/selected";
import { Selection } from "../components/Selection/selection";
import { rackets } from "@/constants/mock";
// import ProductGrid from '../components/ProductGrid/products';

export default function Home() {
  return (
    <main>
      {/* <ProductGrid /> */}
      <Selection title='Featured Rackets' hrefToAll='/rackets'>
        {rackets.slice(0, 5).map((racket) => (
          <SelectedItem key={racket.id} racket={racket} />
        ))}
      </Selection>
    </main>
  );
}
