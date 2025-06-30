import { FC, Suspense } from 'react';
import { RacketContainer } from '../../../components/Racket/racket-container';

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
