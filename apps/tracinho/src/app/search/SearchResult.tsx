'use client';

import { useSuspenseQuery } from '@apollo/client';
import { GetClarificationDoc } from '@tracinho/graphql';
import { WordDetails } from '@tracinho/ui-components';

type Props = {
  search: string;
};

export default function SearchResult({ search }: Props): JSX.Element {
  const { data, error } = useSuspenseQuery(GetClarificationDoc, {
    variables: { word: search },
  });

  const clarification = data?.clarification;

  if (!clarification || error) {
    return <div>Nenhuma explicação encontrada</div>;
  }

  return (
    <div className="flex flex-row items-start gap-6">
      <WordDetails word={clarification.words[0]} />
      <WordDetails word={clarification.words[1]} />
    </div>
  );
}
