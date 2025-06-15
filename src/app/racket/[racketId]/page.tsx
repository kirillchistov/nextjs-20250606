// "use client";

// import { useParams } from "next/navigation";

import { Racket } from '@/types';
import Image from 'next/image';
import Link from 'next/link';


const mockProduct: Racket = {
  id: 15,
  name: "Yonex Ezone 98 2024",
  price: 265,
  type: "racket",
  model: "Ezone 98",
  imageUrl: "http://localhost:4000/Yonex-Ezone-98-2024.jpg",
  year: 2024,
  top10: true,
  description: "Yonex Ezone 98 2024 — ракетка с отличной мощностью и контролем, созданная для игроков среднего и продвинутого уровня.",
  brandId: 3,
  brand: {
    id: 3,
    name: "Yonex"
  }
};

export default function RacketPage() {
  return (
    <div className="product-detail">
      <div className="breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/rackets">Rackets</Link> / {mockProduct.name}
      </div>
      
      <div className="product-container">
        <div className="product-images">
          <div className="placeholder-image">
            <Image
              src={mockProduct.imageUrl}
              width={500}
              height={500}
              alt={mockProduct.name}
            />
          </div>
        </div>
        
        <div className="product-info">
          <div className="brand-badge">
            {mockProduct.brand.name}
          </div>
          
          <h1>{mockProduct.name}</h1>
          
          <div className="price-section">
            <span className="price">${mockProduct.price.toFixed(2)}</span>
          </div>
          
          <p className="description">{mockProduct.description}</p>
          
          <div className="specs">
            <div className="spec">
              <span>Type:</span>
              <span>{mockProduct.type}</span>
            </div>
            <div className="spec">
              <span>Model:</span>
              <span>{mockProduct.model}</span>
            </div>
            <div className="spec">
              <span>Year:</span>
              <span>{mockProduct.year}</span>
            </div>
          </div>
          
          <div className="add-to-cart">
            <div className="quantity-selector">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="add-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// type Props = {
//   params: Promise<{ racketId: string }>;
//   searchParams: Promise<Record<string, string>>;
// };

// export default async function RacketPage({ params, searchParams }: Props) {
//   const { racketId } = await params;
//   const searchParamsResolved = await searchParams;

//   console.log(searchParamsResolved);

//   console.log("render RacketPage", racketId);

//   return (
//     <div>
//       <div>Racket page - {racketId}</div>
//     </div>
//   );
// }

// export const generateStaticParams = () => {
//   return [{ productId: "123" }, { productId: "345" }];
// };

// export default function ProductPage() {
//   const { productId } = useParams();
//   //   const searchParams = useSearchParams();
//   //   console.log(searchParams);

//   return (
//     <div>
//       <div>product page - {productId}</div>
//     </div>
//   );
// }