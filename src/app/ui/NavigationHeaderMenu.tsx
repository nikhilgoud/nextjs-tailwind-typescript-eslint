'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';
import {twMerge} from 'tailwind-merge';

const NavigationHeaderMenu = () => {
  const pathname = usePathname();
  const routes = [
    {name: 'Dashboard', href: '/dashboard', as: '/dashboard'},
    {name: 'About', href: '/about', as: '/about'},
    {name: 'Home', href: '/', as: '/'},
  ];
  return (
    <div className="z-10 p-2 px-24 w-full items-center justify-between font-mono text-sm lg:flex border-b border-neutral-700 dark:border-neutral-900 shadow-2xl">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Sample &nbsp;
        <code className="font-mono font-bold">NextJS App</code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none gap-5">
        {routes.map((route) => (
          <Link
            key={route.name}
            className={twMerge('hover:opacity-80', pathname === route.href ? 'active border-gray-200 shadow-2xl' : '')}
            href={route.href}
            as={route.as}
            prefetch={true}>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationHeaderMenu;
