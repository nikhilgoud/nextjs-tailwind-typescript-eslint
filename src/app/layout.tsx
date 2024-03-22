import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import ClientOnly from './ui/ClientOnly';
import NavigationHeaderMenu from './ui/NavigationHeaderMenu';
import {twMerge} from 'tailwind-merge';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'NextJS Boilerplate App',
  description: `Generated by create next app to include 'Tailwind', 'TypeScript', 'Husky', 'Eslint', 'Prettier', 'Jest', 'Cypress'`,
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={twMerge(inter.className, 'h-full')} suppressHydrationWarning={true}>
        <ClientOnly>
          <NavigationHeaderMenu />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
