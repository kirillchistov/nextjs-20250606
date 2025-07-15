import { FC, Suspense } from 'react';
import { Metadata } from 'next';
import { RacketContainer } from '../../../../components/Racket/racket-container';
import { getMetaRacketById } from '../../../../services/get-meta-racket-by-id';
import { notFound } from 'next/navigation';

type racketProps = {
  params: Promise<{ racketId: string }>;
};

export const generateMetadata = async ({
  params,
}: racketProps): Promise<Metadata> => {

  const { racketId } = await params;

  const result = await getMetaRacketById({ id: racketId });

  if (result.isError || !result.data) {
    return {
      title: 'Tennis racket',
    };
  }

  return {
    title: result.data.name,
    description: result.data.description,
  };
};


const RacketPage: FC<racketProps> = async ({ params }) => {
  const { racketId } = await params;
  const { data, isError } = await getMetaRacketById({ id: racketId });

  if (isError) {
    throw new Error('error');
  }

  if (!data) {
    return notFound();
  }

  return (
    <Suspense fallback={<div>Loading racket...</div>}>
      <RacketContainer racketId={racketId} />
    </Suspense>
  );
}

export default RacketPage;
