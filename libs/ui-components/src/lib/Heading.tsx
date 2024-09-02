import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = PropsWithChildren<{
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}>;

const HeadingVariants = {
  h1: 'text-6xl',
  h2: 'text-4xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-base',
  h6: 'text-sm',
};

export const Heading = ({
  level = 1,
  className,
  children,
}: Props): JSX.Element => {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;

  const defaultClasses = 'font-bold tracking-tight text-gray-800';
  const headerClasses = twMerge(
    defaultClasses,
    HeadingVariants[`h${level}`],
    className
  );

  return <HeadingTag className={headerClasses}>{children}</HeadingTag>;
};
