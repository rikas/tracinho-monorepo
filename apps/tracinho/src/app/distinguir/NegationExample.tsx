import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

type Props = {
  first: ReactNode;
  second: ReactNode;
};

export default function NegationExample({ first, second }: Props): JSX.Element {
  return (
    <li>
      <div className="inline-flex flex-nowrap content-center items-center gap-1.5">
        <span>{first}</span>
        <ArrowLongRightIcon className="h-5 w-5" />
        <span>{second}</span>
      </div>
    </li>
  );
}
