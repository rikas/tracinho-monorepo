import { twMerge } from 'tailwind-merge';
import { Heading } from './Heading';
import { BasicWordFragment } from '@tracinho/graphql';
import { SiteExamples } from './SiteExamples';

type Props = {
  word: BasicWordFragment;
};

export function WordDetails({ word }: Props): JSX.Element {
  const { exists, classification, text } = word;
  const titleClasses = exists ? '' : 'text-red-500';

  return (
    <div className="flex flex-1 basis-0 flex-col">
      <Heading className={twMerge('mb-2', titleClasses)} level={2}>
        {text}
      </Heading>

      {exists ? (
        <p className="text-gray-800/50">{classification}</p>
      ) : (
        <p className="text-red-500">Esta palavra não existe!</p>
      )}

      {exists && <SiteExamples word={word} />}
    </div>
  );
}
