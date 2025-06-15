type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <div>products page - {slug.join(",")}</div>
    </div>
  );
}