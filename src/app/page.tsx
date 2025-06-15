import Header from '../components/Header/header';
// import Hero from '../components/Hero/hero';
import ProductGrid from '../components/ProductGrid/products';
import Footer from '../components/Footer/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <Hero /> */}
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}