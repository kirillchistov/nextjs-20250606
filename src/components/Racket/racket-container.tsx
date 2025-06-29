import { FC } from 'react';
import { Racket } from './racket';
import { getRacketById } from '../../services/get-racket-by-id';
import { notFound } from 'next/navigation';

type Props = {
  racketId: string;
};

export const RacketContainer: FC<Props> = async ({ racketId }) => {
  const { data, isError } = await getRacketById({ id: racketId });

  if (isError) {
    return 'someError';
  }

  if (!data) {
    return notFound();
  }

  return <Racket racket={data} />;
};