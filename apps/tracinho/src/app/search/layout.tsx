import { PropsWithChildren } from 'react';
import { MainContainer } from '@tracinho/ui-components';

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return <MainContainer title="Pesquisa">{children}</MainContainer>;
}
