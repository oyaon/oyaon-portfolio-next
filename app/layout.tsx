import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oyaon Sultan — Software, AI & Growth Systems',
  description: 'Selected software engineering, applied AI, data and digital growth work by Oyaon Sultan.',
  metadataBase: new URL('https://oyaon.github.io'),
  openGraph: { title: 'Oyaon Sultan — Software, AI & Growth Systems', description: 'Engineering useful digital systems from research to delivery.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
