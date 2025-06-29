import { FC } from 'react';
import { Racket } from './racket';
import { notFound } from 'next/navigation';
import { getRacketByIdSlow } from '../../services/get-racket-by-id-slow';

type Props = {
  id: string;
};

export const RacketContainerSlow: FC<Props> = async ({ id }) => {
  const { data, isError } = await getRacketByIdSlow({ id });

  if (isError) {
    return 'someError';
  }

  if (!data) {
    return notFound();
  }

  return <Racket racket={data} />;
};