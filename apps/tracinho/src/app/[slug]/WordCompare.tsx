'use client';

import { useSuspenseQuery } from '@apollo/client';
import { GetClarificationDocument } from '@tracinho/graphql';
import { MainContainer, WordDetails } from '@tracinho/ui-components';

export default function WordCompare({ slug }: { slug: string }): JSX.Element {
  const { data } = useSuspenseQuery(GetClarificationDocument, {
    variables: { word: slug },
  });

  const clarification = data?.clarification;

  if (!clarification) {
    return <div>Nenhuma explicação encontrada</div>;
  }

  const title = (
    <div className="inline-flex gap-3">
      <span>{clarification.words[0].text}</span>
      <span className="text-white/50">≠</span>
      <span>{clarification.words[1].text}?</span>
    </div>
  );

  return (
    <MainContainer title={title}>
      <div className="flex flex-row items-start gap-6">
        <WordDetails word={clarification.words[0]} />
        <WordDetails word={clarification.words[1]} />
      </div>
    </MainContainer>
  );
}
