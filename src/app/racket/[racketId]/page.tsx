import { FC, Suspense } from 'react';
import { RacketContainer } from '../../../components/Racket/racket-container';

export const generateStaticParams = () => {
  return [{ racketId: '1' }, { racketId: '2' }, { racketId: '3' }];
};

type racketProps = {
  params: Promise<{ racketId: string }>;
};

const RacketPage: FC<racketProps> = async ({ params }) => {
  const { racketId } = await params;

  return (
    <Suspense fallback={<div>loading racket...</div>}>
      <RacketContainer racketId={racketId} />
    </Suspense>
  );
}

export default RacketPage;
