import { redirect } from 'next/navigation';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ searchParams }: Props) => {
  const { page = '1' } = await searchParams;
  const pageNumber = Array.isArray(page) ? '1' : page;

  redirect(`/rackets?page=${pageNumber}`);
};

export default Page;