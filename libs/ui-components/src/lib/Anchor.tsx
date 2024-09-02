import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = PropsWithChildren<{
  href: string;
  className?: string;
  variant?: keyof typeof AchorVariants;
}> &
  ComponentProps<typeof Link>;

export const AchorVariants = {
  default: 'text-primary-600 hover:text-primary-800 hover:underline',
  unstyled: '',
};

export function Anchor({
  href,
  children,
  variant = 'default',
  className,
  ...props
}: Props): JSX.Element {
  const defaultClasses = AchorVariants[variant];
  const classNames = twMerge(defaultClasses, className);

  return (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  );
}
