import { FC } from 'react';
import { ImageResponse } from 'next/og';
import { isDemoMode } from '../../../../constants/demo';
import { getRacketOgDataById } from '../../../../services/get-racket-og-data-by-id';
import { getDemoRacketIds } from '../../../../services/demo-store';
import { IRacket } from '../../../../types/index';

export const alt = 'Tennis racket preview';
export const dynamic = 'force-static';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

type Props = {
  params: Promise<{ racketId: string }>;
};

export const generateStaticParams = async () => {
  if (!isDemoMode()) {
    return [];
  }

  return getDemoRacketIds().map((racketId) => ({ racketId }));
};

const Image: FC<{
  racket: IRacket;
}> = ({ racket }) => {
  const { brand, imageUrl, model, name, price, type, year } = racket;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #111827 0%, #111827 52%, #f8fafc 52%, #f8fafc 100%)',
        color: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
        padding: '64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '54%',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            background: '#facc15',
            color: '#111827',
            borderRadius: '999px',
            padding: '12px 24px',
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          {brand.name}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 18,
            fontSize: 28,
            color: '#d1d5db',
            marginBottom: 36,
          }}
        >
          <span>{model}</span>
          <span>|</span>
          <span>{type}</span>
          <span>|</span>
          <span>{year}</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 48,
            fontWeight: 800,
            color: '#facc15',
          }}
        >
          ${price.toFixed(2)}
        </div>
      </div>
      <div
        style={{
          width: '38%',
          height: '78%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          borderRadius: 40,
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.28)',
          padding: 32,
        }}
      >
        <img
          src={imageUrl}
          width='380'
          height='380'
          style={{ objectFit: 'contain' }}
          alt={name}
        />
      </div>
    </div>
  );
};

const NotFoundImage = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#111827',
      color: '#f8fafc',
      fontFamily: 'Arial, sans-serif',
      fontSize: 64,
      fontWeight: 800,
    }}
  >
    Tennis racket not found
  </div>
);

const OGImage = async ({ params }: Props) => {
  const { racketId } = await params;
  const { data } = await getRacketOgDataById({ id: racketId });

  return new ImageResponse(data ? <Image racket={data} /> : <NotFoundImage />, {
    ...size,
  });
};

export default OGImage;