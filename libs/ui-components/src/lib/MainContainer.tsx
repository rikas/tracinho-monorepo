import { PropsWithChildren, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Heading } from './Heading';

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

export const MainContainer = ({ title, children }: Props): JSX.Element => {
  return (
    <div className="min-h-full">
      <div className="bg-gray-800 pb-32">
        <Navbar />

        <header className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading level={1} className="text-3xl text-white">
              {title}
            </Heading>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            {children}
          </div>
        </div>
      </main>

      <footer>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
            <span className="block sm:inline">
              &copy; {new Date().getFullYear()} Ricardo Otero, Inc.
            </span>{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
