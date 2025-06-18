// import Hero from '../components/Hero/hero';
import ProductGrid from '../components/ProductGrid/products';

export default function Home() {
  return (
    <>
      <main>
        {/* <Hero /> */}
        <ProductGrid />
      </main>
    </>
  );
}

export async function generateStaticParams() {
    return [
        { racket_id: "2", },
        { racket_id: "4", },
        { racket_id: "6", },
    ];
}