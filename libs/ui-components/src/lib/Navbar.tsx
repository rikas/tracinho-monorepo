'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchWord = searchParams.get('word');

  const navLinks = [
    { name: 'Inicial', href: '/' },
    { name: 'Como distinguir', href: '/distinguir' },
  ];

  function navClassNames(href: string): string {
    const defaultClasses = 'rounded-md px-3 py-2 text-sm font-medium';
    return href === pathname
      ? twMerge(defaultClasses, 'bg-gray-900 text-white')
      : twMerge(
          defaultClasses,
          'text-gray-300 hover:bg-gray-700 hover:text-white'
        );
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="border-b border-gray-700">
          <div className="flex h-16 items-center justify-between px-4 sm:px-0">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Tracinho"
                />
              </div>

              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={navClassNames(item.href)}
                    aria-current={item.href === pathname ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative z-0 flex flex-1 justify-end pl-4">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Pesquisar
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <form action="/search">
                    <input
                      id="search"
                      name="word"
                      className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                      placeholder="Pesquisar"
                      autoComplete="off"
                      defaultValue={searchWord || ''}
                      type="search"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
