import {
  SiteExample,
  BasicWordFragment,
  GetApprovedSiteExamplesDoc,
} from '@tracinho/graphql';
import { Heading } from './Heading';
import { useSuspenseQuery } from '@apollo/client';

type Props = {
  word: BasicWordFragment;
};

function highlightWord(text: string, word: string) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, (match) => `<mark>${match}</mark>`);
}

export function SiteExamples({ word }: Props) {
  const { data } = useSuspenseQuery(GetApprovedSiteExamplesDoc, {
    variables: { wordId: word.id },
  });

  const siteExamples = data?.siteExamples?.nodes || [];

  const filteredExamples = siteExamples.filter(
    (example): example is SiteExample => Boolean(example)
  );

  return (
    <>
      <Heading level={4}>Exemplos</Heading>

      <div className="flex flex-col gap-2">
        {filteredExamples.map((siteExample) => {
          const highlightedText = highlightWord(siteExample.text, word.text);

          return (
            <div key={siteExample.id} id={siteExample.id}>
              <blockquote
                dangerouslySetInnerHTML={{
                  __html: `&laquo;${highlightedText}&raquo;`,
                }}
                className="border-l-4 border-l-primary-400 p-3 text-sm italic"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
