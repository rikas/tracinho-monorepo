import { Children, PropsWithChildren, ReactNode } from 'react';
import { Anchor } from './Anchor';

type Props = PropsWithChildren<{
  word: ReactNode;
  className?: string;
}>;

export function WordLink({ children, word, className }: Props): JSX.Element {
  let content = word;

  if (Children.count(children) > 0) {
    content = children;
  }

  return (
    <Anchor href={`/words/${word}`} className={className}>
      {content}
    </Anchor>
  );
}
