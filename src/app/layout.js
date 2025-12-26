import Navbar from './components/Navbar';
import './globals.css';
import { Oswald, Inter } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

import { Providers } from './providers';

export const metadata = {
  title: 'IMSESO - Inclusive Management & Social Empowering Security Organization',
  description: 'Welcome to IMSESO',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'IMSESO',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}