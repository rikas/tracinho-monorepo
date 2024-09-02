import { Suspense } from 'react';
import SearchResult from './SearchResult';

type Props = {
  searchParams: { word: string };
};

export default async function Page({ searchParams }: Props) {
  const { word } = searchParams;

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SearchResult search={word} />
    </Suspense>
  );
}
